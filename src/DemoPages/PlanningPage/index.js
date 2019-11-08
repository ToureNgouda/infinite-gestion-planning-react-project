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
    }
    render() {

        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Planning />
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
