import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import Basic from '../Dashboards/Basic';
import { Route }  from 'react-router-dom'
import AppFooter from '../../Layout/AppFooter';

export default class HomePage extends Component {

    render() {

        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Route  path={'/dashbord'} Component={Basic}/>
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
