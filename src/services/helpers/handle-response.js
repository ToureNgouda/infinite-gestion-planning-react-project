import { authenticationService } from '../authentificationService';
import React from 'react';
import { Redirect } from 'react-router-dom';


export function handleResponse(response) {
    console.log("handle reposne", response)
    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    localStorage.clear();
    return (<Redirect to={'/login'} />)

}