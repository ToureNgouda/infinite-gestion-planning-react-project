import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import { EmployesList } from './EmployesList';
import { Table, CardTitle, CardBody, Card, Col, Row, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import EditEmploye from './EditEmploye';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import CreerEmploye from './EmployeCreate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            employe: {},
            params: '',
            modalIsOpen:false,
            isRedirect: false,
            redirectCreateEmploye: false,
            getEmployes: false
        }
        // this.getAllEmployes();
    }
    activerEmploye = (employe) => {
        employeService.activerEmploye(employe).then(result => {
            if (result && result.status === 200) {
                this.getAllEmployes();
            }
        });
    }
    desactiverEmploye = (employe) => {
        employeService.desactiverEmploye(employe).then(result => {
            if (result && result.status === 200) {
                this.getAllEmployes();
            }
        });
    }
    supprimerEmploye = () => {
        employeService.supprimerEmploye(this.state.employe).then(result => {
            if (result && result.status === 200) {
                this.setState({ modalIsOpen: false});
                this.getAllEmployes();
                toast.success(`l'employé a été supprimé avec succés`, {
                    ptoastosition: toast.POSITION.TOP_CENTER
                });
            }else {
                this.setState({ modalIsOpen: false});
                toast.error(`Une erreur est survenue coté serveur`, {
                    ptoastosition: toast.POSITION.TOP_CENTER
                });
            }
        });
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
                return employes;
            }
        }).catch(error => {
        })
    }
    editEmploye = employe => {
        this.props.history.push(`/employes/${employe.id}`);
        this.setState({ isRedirect: true })
    }
    closeModal=()=>{
        this.setState({ modalIsOpen:false});
    }
    openModal=(employe)=>{
        this.setState({ employe });
        this.setState({ modalIsOpen: true });
    }
    render() {
        // if(this.state.redirectCreateEmploye){
        //     return (<Redirect to={'/employes/creerEmploye'}/>)
        // }
        const listEmployes = this.state.employes.map(employe =>
            <EmployesList key={employe.id} employe={employe} editEmploye={this.editEmploye} openModal={this.openModal} activerEmploye={this.activerEmploye} desactiverEmploye={this.desactiverEmploye} />
        )
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <div className="showEmploye">
                                <ToastContainer/>
                                <Modal isOpen={this.state.modalIsOpen} toggle={this.closeModal}>
                                    <ModalHeader toggle={this.closeModal}>Supprimer un employé</ModalHeader>
                                    <ModalBody>
                                        Etes vous  sûr de vouloir supprimer <b> {this.state.employe.prenom} {this.state.employe.nom} </b><br /> de la liste des employés
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={this.closeModal}>Annuler</Button>{' '}
                                        <Button color="primary" onClick={this.supprimerEmploye}>Confirmer</Button>
                                    </ModalFooter>
                                </Modal>
                                <Route exact strict path={`${this.state.match.url}`} render={() => (
                                    (
                                        <Card className="main-card mb-3">
                                            <CardBody>
                                                <CardTitle>
                                                    <Row>
                                                        <Col md="10">Liste Employés</Col>
                                                        <Col md="2">
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
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
