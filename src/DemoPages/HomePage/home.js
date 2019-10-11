import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import Basic from '../Dashboards/Basic';
import AppFooter from '../../Layout/AppFooter';
import { Redirect } from 'react-router-dom';

export default class HomePage extends Component {

    render() {
         if(!JSON.parse(localStorage.getItem('currentUser'))){
           return (<Redirect to={'/login'}/>)
            }
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Basic />
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
