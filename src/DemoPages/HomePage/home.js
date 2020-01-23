import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import Basic from '../Dashboards/Basic';
import AppFooter from '../../Layout/AppFooter';
import { Redirect, Route } from 'react-router-dom';
import Profile from '../ProfilePage';



export default class HomePage extends Component {
    constructor(props){
          super(props);
          this.state={
            date: new Date(),
        }
    }
    
   
      
    render() {
        var date = `${this.state.date.getFullYear()}-${(
            "0" +
            (this.state.date.getMonth() + 1)
        ).slice(-2)}-${("0" + this.state.date.getDate()).slice(-2)} ${(
            "0" + this.state.date.getHours()
        ).slice(-2)}:${("0" + this.state.date.getMinutes()).slice(-2)}:${this.state.date.getSeconds()}`;
        var  expire_in = new Date();
        if(localStorage.getItem('currentUser'))
            expire_in = new Date(JSON.parse(localStorage.getItem('currentUser')).expires_in);
        var date_expire_in = `${expire_in.getFullYear()}-${(
            "0" +
            (expire_in.getMonth() + 1)
        ).slice(-2)}-${("0" + expire_in.getDate()).slice(-2)} ${(
            "0" + expire_in.getHours()
        ).slice(-2)}:${("0" + expire_in.getMinutes()).slice(-2)}:${expire_in.getSeconds()}`;
        if(!JSON.parse(localStorage.getItem('currentUser')) || date_expire_in < date){
           return (<Redirect to={'/login'}/>)
            }
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            {this.props.match.url === "/dashboard" && 
                            <Basic /> }
                             {this.props.match.url === "/profile" && 
                            <Profile /> }
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
