/* eslint-disable no-unused-expressions */
import React from 'react';
import { Route } from 'react-router-dom';
import Login  from '../DemoPages/Login/login'
import { authenticationService } from './authentificationService'

// import { Container } from './styles';

export const PrivateRoute= ({component:Component,...rest})=> {
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Route path='/login' component={Login} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
}
