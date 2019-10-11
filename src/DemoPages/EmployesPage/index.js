import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import { EmployesList } from './EmployesList';
import { Table, CardTitle, CardBody, Card, Col, Label ,Row ,Button} from 'reactstrap';
import { Route, Redirect } from 'react-router-dom';
import EditEmploye from './EditEmploye';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import {

    faPlus,

} from '@fortawesome/free-solid-svg-icons';

import { employeService } from '../../services/employeService';

export default class EmployesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employes: [],
            match: this.props.match,
            employe: null,
            params: '',
            isRedirect: false
        }
        console.log("math", this.state.match)
        this.getAllEmployes();
    }
    getAllEmployes() {
        employeService.getAllEmployes().then(resp => {
            if (resp.status === 200) {
                const employes = resp.data;
                this.setState({ employes });
                console.log("employes", this.state)
            }
        }).catch(error => {
            console.log("error cote serveur", error);
        })
    }
    editEmploye = employe => {
        console.log(employe);
        console.log(this.state);
        const emp = employe;
        this.setState({ employe: emp });
        console.log(this.state)
        this.setState({ params: employe.id })
        console.log("fecontion edit employe appele", this.state.employe, this.state.match);
        this.setState({ isRedirect: true })
    }
    render() {
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
                            <Route path={`${this.state.match.url}`} render={() => (
                                (
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>   
                                            <Row>
                                                <Col md="8">Liste Employés</Col>
                                                <Col md="4" className="ajouter">
                                                    <Button  outline color="secondary">
                                                    <FontAwesomeIcon icon={faPlus}/> { '   ' }
                                                      <span>Ajouter</span>
                                                    </Button>
                                                </Col>
                                             </Row>
                                            </CardTitle>
                                            <Table responsive className="mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Prenom</th>
                                                        <th>Nom</th>
                                                        <th>Email</th>
                                                        <th>Genre</th>
                                                        <th>TypeEmploye</th>
                                                        <th>Telephone</th>
                                                        <th>Adresse</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {listEmployes}
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
                                )
                            )} />


                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
