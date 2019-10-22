import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import { EmployesList } from './EmployesList';
import { Table, CardTitle, CardBody, Card, Col, Row, Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import EditEmploye from './EditEmploye';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import CreerEmploye from './EmployeCreate';
import { AnimatedSwitch } from 'react-router-transition';
import {

    faPlus,

} from '@fortawesome/free-solid-svg-icons';

import { employeService } from '../../services/employeService';

export default class EmployesPage extends Component {
    constructor(props) {
        super(props);
        this.getAllEmployes();
        this.state = {
            employes: [],
            match: this.props.match,
            employe: null,
            params: '',
            isRedirect: false,
            redirectCreateEmploye: false,
            getEmployes: false
        }
        console.log("math", this.state.match)
        // this.getAllEmployes();
    }
    handleAddEmploye = () => {
        this.setState({ redirectCreateEmploye: true })
    }
    getAllEmployes() {
        employeService.getAllEmployes().then(resp => {
            if (resp.status === 200) {
                const employes = resp.data;
                this.setState({ employes });
                this.setState({ getEmployes: true })
                console.log("employes", this.state);
                return employes;
            }
        }).catch(error => {
            console.log("error cote serveur", error);
        })
    }
    editEmploye = employe => {
        console.log(employe);
        this.props.history.push(`/employes/${employe.id}`);
        this.setState({ isRedirect: true })
        //console.log(typeof(this.props.match.params.id))
    }
    render() {
        // if(this.state.redirectCreateEmploye){
        //     return (<Redirect to={'/employes/creerEmploye'}/>)
        // }
        const listEmployes = this.state.employes.map(employe =>
            <EmployesList key={employe.id} employe={employe} editEmploye={this.editEmploye} />
        )
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Route exact strict path={`${this.state.match.url}`} render={() => (
                                (
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>
                                                <Row>
                                                    <Col md="8">Liste Employés</Col>
                                                    <Col md="4" className="ajouter">
                                                        <Link to="/employes/creerEmploye">
                                                            <Button outline color="secondary" onClick={this.handleAddEmploye}>
                                                                <FontAwesomeIcon icon={faPlus} /> {'   '}
                                                                <span>Ajouter</span>
                                                            </Button>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </CardTitle>
                                            <Table responsive className="mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>NUMERO</th>
                                                        <th>PRENOM</th>
                                                        <th>NOM</th>
                                                        <th>EMAIL</th>
                                                        <th>GENRE</th>
                                                        <th>TYPE</th>
                                                        <th>TELEPHONE</th>
                                                        <th>ADRESSE</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.getEmployes && listEmployes}
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
                                )
                            )} />
                            <Route exact path='/employes/creerEmploye' component={CreerEmploye}></Route>

                            {this.state.isRedirect &&
                                <Route exact path={"/employes/:id"} component={EditEmploye}></Route>}

                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
