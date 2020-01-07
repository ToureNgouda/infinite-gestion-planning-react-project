import React, { Component, Fragment, Suspense, lazy, } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import Planning from './ShowPlanning';
import LoadingOverlay from 'react-loading-overlay';
import './index.css';
import BounceLoader from 'react-spinners/BounceLoader';
import LoadingContext from './LoadingContext';
import { planningService }  from '../../services/planningService';
import { ToastContainer, toast } from 'react-toastify';

export default class PlanningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateDebut: '',
            dateFin: '',
            isLoading:false
        }
    }
    timeOut(state){
       setTimeout(() => {
             this.setState({ isLoading:false });
          }, 18000);

    }
   
    exportPlanning = (state) => {
        console.log("fonction appele",state)
         this.setState({ isLoading:true });
        // this.timeOut(state);
        const loc = `https://gestionstaffing.herokuapp.com/exporterplanning/${state}`;
        window.location = loc;
        // planningService.exportPlanning(state).then(result =>{
        //        if(result && result.status === 200){
        //         this.setState({ isLoading: false});
        //          console.log("result",result)
        //        }else{
        //         this.setState({ isLoading: false});
        //         toast.error('Une erreur est survenue coté serveur lors de l\'export du planning.', {
        //             position: toast.POSITION.TOP_CENTER
        //         });
                 
        //        }
        // })
       
    }
    regenererPlanningMoisProchain=()=>{
        this.setState({ isLoading: true})
        planningService.regenererPlanningMoisProchain().then(result => {
            if (result && result.status === 200) {
                this.setState({ isLoading: false });
                toast.info('Le planning du mois prochain a été regéneré avec succés.', {
                    position: toast.POSITION.TOP_CENTER
                });
            }else {
                this.setState({ isLoading: false });
                toast.info('Le planning du mois prochain a été regéneré avec succés.', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }
    genererPlanningMoisProchain = () => {
        this.setState({ isLoading: true})
        planningService.genererPlanningMoisProchain().then(result => {
            if (result && result.status === 200) {
                this.setState({ isLoading: false });
                toast.info('Le planning du mois prochain a été géneré avec succés.', {
                    position: toast.POSITION.TOP_CENTER
                });
            }else {
                this.setState({ isLoading: false });
                toast.info('Le planning du mois prochain a été géneré avec succés.', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }
   
    regenererPlanningMoisEnCours = () => {
        this.setState({ isLoading: true})
        planningService.regenererPlanningMoisEnCours().then(result => {
            if (result && result.status === 200) {
                this.setState({ isLoading: false });
                toast.info('Le planning du mois en cours a été regéneré avec succés.', {
                    position: toast.POSITION.TOP_CENTER
                });
            }else {
                this.setState({ isLoading: false });
                toast.info('Le planning du mois en cours a été regéneré avec succés.', {
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
            spinner={<BounceLoader/>}
        >
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Planning regenererPlanningMoisProchain={this.regenererPlanningMoisProchain} 
                             genererPlanningMoisProchain={this.genererPlanningMoisProchain} 
                             regenererPlanningMoisEnCours={this.regenererPlanningMoisEnCours}
                             exportPlanning={this.exportPlanning}
                            />
                            <div className="toastCont">
                                <ToastContainer/>
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
