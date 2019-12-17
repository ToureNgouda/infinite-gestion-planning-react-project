import axios from 'axios';
import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';

export const planningService = {
    genererPlanningMoisProchain,
    regenererPlanningMoisProchain,
    regenererPlanningMoisEnCours,
    verifieGenerationPlanning,
    sendEmail,
    exportPlanning

   
};

function genererPlanningMoisProchain() {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/moisProchain`,requestOptions)
    .then(resp => {
         console.log("response",resp)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
          console.log(error);
          handleResponse(error);
    });

}
function regenererPlanningMoisProchain() {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/regenerMoisProchain`,requestOptions)
    .then(resp => {
         console.log("response",resp)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
        handleResponse(error);
          console.log(error);
    });
}
function regenererPlanningMoisEnCours() {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/regenerMoisEnCours`,requestOptions)
    .then(resp => {
         console.log("response",resp)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
        handleResponse(error);
          console.log(error);
    });
}
function verifieGenerationPlanning() {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/verifieGenerationPlanning`,requestOptions)
    .then(resp => {
         console.log("response",resp)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
        handleResponse(error);
          console.log(error);
    });
}
function sendEmail(state) {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/sendEmail/${state}`,requestOptions)
    .then(resp => {
         console.log("response",resp)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
        handleResponse(error);
          console.log(error);
    });
}
function exportPlanning(state) {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/exporterplanning/${state}`,requestOptions)
    .then(resp => {
         console.log("response",resp)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
        handleResponse(error);
          console.log(error);
    });
    // const loc = `https://gestionstaffing.herokuapp.com/exporterplanning/${this.state.dateDebut}`;
    // window.location = loc;
}