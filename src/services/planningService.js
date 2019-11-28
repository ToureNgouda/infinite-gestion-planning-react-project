import axios from 'axios';
import config from 'config';
import { authHeader } from './helpers/auth-header';

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
    });

}
function regenererPlanningMoisProchain(state) {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/regenerMoisProchain`,state,requestOptions)
    .then(resp => {
         console.log("response",resp)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
          console.log(error);
    });
}
function regenererPlanningMoisEnCours(state) {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/regenererMoisEnCours`,state,requestOptions)
    .then(resp => {
         console.log("response",resp)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
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
          console.log(error);
    });
    // const loc = `https://gestionstaffing.herokuapp.com/exporterplanning/${this.state.dateDebut}`;
    // window.location = loc;
}