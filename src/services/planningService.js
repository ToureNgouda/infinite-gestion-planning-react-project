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
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
          handleResponse(error);
    });

}
function regenererPlanningMoisProchain() {
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/regenerMoisProchain`,requestOptions)
    .then(resp => {
        return resp;
    }).catch(error=>{
        handleResponse(error);
    });
}
function regenererPlanningMoisEnCours() {
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/regenerMoisEnCours`,requestOptions)
    .then(resp => {
        return resp;
    }).catch(error=>{
        handleResponse(error);
    });
}
function verifieGenerationPlanning() {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/verifieGenerationPlanning`,requestOptions)
    .then(resp => {
        return resp;
    }).catch(error=>{
        handleResponse(error);
    });
}
function sendEmail(state) {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/sendEmail/${state}`,requestOptions)
    .then(resp => {
        return resp;
    }).catch(error=>{
        handleResponse(error);
    });
}
function exportPlanning(state) {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/planning/exporterplanning/${state}`,requestOptions)
    .then(resp => {
        return resp;
    }).catch(error=>{
        handleResponse(error);
    });
}