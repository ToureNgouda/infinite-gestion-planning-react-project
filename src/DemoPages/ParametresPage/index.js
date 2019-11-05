import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import  ShowParametre  from './ShowParametres';

export default class ParametrePage extends Component {

    render() {

        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                          <ShowParametre/> 
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
