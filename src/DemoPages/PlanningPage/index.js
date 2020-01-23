import React, { Component, Fragment, Suspense, lazy, } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import Planning from './ShowPlanning';
import LoadingOverlay from 'react-loading-overlay';
import './index.css';
import BounceLoader from 'react-spinners/BounceLoader';
import LoadingContext from './LoadingContext';
import { planningService } from '../../services/planningService';
import { ToastContainer, toast } from 'react-toastify';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';
import { from } from 'rxjs';

export default class PlanningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateDebut: '',
            dateFin: '',
            isLoading: false,
            openModal: false,
            message: '',
            identifieButton: '',
            status: 0
        }
    }
    timeOut(message) {
        setTimeout(() => {
            this.setState({ isLoading: false });
            if (this.state.status === 200) {
                toast.info(message, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }, 15000);

    }
    openModal = (message, identifieButton) => {
        this.setState({ openModal: true });
        this.setState({ message });
        this.setState({ identifieButton });

    }
    closeModal = () => {
        this.setState({ openModal: false });
    }
    handleSubmit = () => {
        this.setState({ openModal: false });
        if (this.state.identifieButton === "moisEnCours") {
            this.setState({ isLoading: true });
            let message = 'Le planning du mois en cours a été regéneré avec succés.';
            this.timeOut(message);
            planningService.regenererPlanningMoisEnCours().then(result => {
                if (result && result.status === 200) {
                    this.setState({ status: result.status })
                } else {
                    this.setState({ isLoading: false });
                    toast.error('une erreur est survenue coté serveur', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })

        } else if (this.state.identifieButton === "moisProchain") {
            this.setState({ isLoading: true });
            let message = 'Le planning du mois prochain a été géneré avec succés.';
            this.timeOut(message);
            planningService.genererPlanningMoisProchain().then(result => {
                if (result && result.status === 200) {
                    this.setState({ status: result.status })
                } else {
                    this.setState({ isLoading: false });
                    toast.error('Une erreur est survenue coté serveur.', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })

        } else {
            this.setState({ isLoading: true });
            let message = 'Le planning du mois prochain a été regéneré avec succés.';
            this.timeOut(message);
            planningService.regenererPlanningMoisProchain().then(result => {
                if (result && result.status === 200) {
                    this.setState({ status: result.status })
                } else {
                    this.setState({ isLoading: false });
                    toast.error('une erreur est survenue coté serveur ', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })
        }
    }
    exportPlanning = (state) => {
        const loc = `http://64.227.28.2/exporterplanning/${state}`;
        window.location = loc;
        this.setState({ isLoading: false });
    }
    regenererPlanningMoisProchain = () => {
        this.setState({ isLoading: true });
        let message = 'Le planning du mois prochain a été regéneré avec succés.';
        this.timeOut(message);
        planningService.regenererPlanningMoisProchain().then(result => {
            if (result && result.status === 200) {
                this.setState({ status: result.status })
            } else {
                this.setState({ isLoading: false });
                toast.error('une erreur est survenue coté serveur ', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }
    genererPlanningMoisProchain = () => {
        this.setState({ isLoading: true });
        let message = 'Le planning du mois prochain a été géneré avec succés.';
        this.timeOut(message);
        planningService.genererPlanningMoisProchain().then(result => {
            if (result && result.status === 200) {
                this.setState({ status: result.status })
            } else {
                this.setState({ isLoading: false });
                toast.error('Une erreur est survenue coté serveur.', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }

    regenererPlanningMoisEnCours = () => {
        this.setState({ isLoading: true });
        let message = 'Le planning du mois en cours a été regéneré avec succés.';
        this.timeOut(message);
        planningService.regenererPlanningMoisEnCours().then(result => {
            if (result && result.status === 200) {
                this.setState({ status: result.status })
            } else {
                this.setState({ isLoading: false });
                toast.error('une erreur est survenue coté serveur', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }

    render() {
        return (
            <LoadingContext.Provider >
                <LoadingOverlay className="bounceloader"
                    active={this.state.isLoading}
                    text='Merci de patienter...'
                    spinner={<BounceLoader />}
                >
                    <Fragment>
                        <AppHeader />
                        <div className="app-main">
                            <AppSidebar />
                            <div className="app-main__outer">
                                <div className="app-main__inner">
                                    <Modal isOpen={this.state.openModal} toggle={this.closeModal}>
                                        <ModalHeader toggle={this.closeModal}></ModalHeader>
                                        <ModalBody>
                                            {this.state.message}
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="secondary" onClick={this.closeModal}>Annuler</Button>{' '}
                                            <Button color="primary" onClick={this.handleSubmit}>Confirmer</Button>
                                        </ModalFooter>
                                    </Modal>
                                    <Planning openModal={this.openModal}
                                        exportPlanning={this.exportPlanning}
                                    />
                                    <div className="toastCont">
                                        <ToastContainer />
                                    </div>
                                </div>
                                <AppFooter />
                            </div>
                        </div>
                    </Fragment>
                </LoadingOverlay>
            </LoadingContext.Provider>
        )
    }
}
