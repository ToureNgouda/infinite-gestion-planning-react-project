import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import Basic from '../Dashboards/Basic';
import AppFooter from '../../Layout/AppFooter';
import Planning from './ShowPlanning';
import { employeService } from '../../services/employeService';
import './index.css';
export default class PlanningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateDebut: '',
            dateFin: ''
        }
        this.getVacationSemaine();
    }
    getVacationSemaine() {
        employeService.getVacationSemaine().then(result => {
            if (result.status === 200) {
                const dateDebut = result.data.dateDebut;
                const dateFin = result.data.dateFin;
                this.setState({ dateDebut });
                this.setState({ dateFin });
            }
        })
    }
    render() {

        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <img src="" />
                            <div className="entete">
                                <i>
                                    <b>
                                        Planning du  {this.state.dateDebut} au {this.state.dateFin}
                                    </b>
                                </i>
                            </div>
                            <Planning />
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
