import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import  AppMain  from '../../Layout/AppMain'

// import { Container } from './styles';
const d = new Date();
const HandleResponse = () => {
    var date = `${d.getFullYear()}-${(
        "0" +
        (d.getMonth() + 1)
    ).slice(-2)}-${("0" + d.getDate()).slice(-2)} ${(
        "0" + d.getHours()
    ).slice(-2)}:${("0" + d.getMinutes()).slice(-2)}:${d.getSeconds()}`;
    console.log("date", date);
    var expire_in = new Date(JSON.parse(localStorage.getItem('currentUser')).expires_in);
    var date_expire_in = `${expire_in.getFullYear()}-${(
        "0" +
        (expire_in.getMonth() + 1)
    ).slice(-2)}-${("0" + expire_in.getDate()).slice(-2)} ${(
        "0" + expire_in.getHours()
    ).slice(-2)}:${("0" + expire_in.getMinutes()).slice(-2)}:${expire_in.getSeconds()}`;
    console.log("expire_in", date_expire_in);
    if (!JSON.parse(localStorage.getItem('currentUser')) || date_expire_in < date) {
        return (<Redirect to={'/login'} />)
    } else {
        return (
            <Route path="/dashboard" component={AppMain}/>
        );
    }

}

export default HandleResponse;

