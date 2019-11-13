import axios from 'axios';
import config from 'config';
import { authHeader } from './helpers/auth-header';

export const gestionHoraireService = {
    getAllGestionHoraire,
   
};

function getAllGestionHoraire() {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/gestionhoraire`,requestOptions)
    .then(resp => {
         console.log("response",resp)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
          console.log(error);
    })

}