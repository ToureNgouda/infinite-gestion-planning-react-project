import axios from 'axios';
import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';

export const gestionHoraireService = {
    getAllGestionHoraire,
    updateGestionHoraire
   
};

function getAllGestionHoraire() {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/gestionhoraire`,requestOptions)
    .then(resp => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
          handleResponse(error);
    });

}
function updateGestionHoraire(state) {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/gestionhoraire`,state,requestOptions)
    .then(resp => {
        return resp;
    }).catch(error=>{
          handleResponse(error);
    });
}