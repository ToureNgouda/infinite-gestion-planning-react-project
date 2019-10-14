import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';
import axios from 'axios';


export const employeService = {
    getAllEmployes,
    saveEmploye
};

function getAllEmployes() {
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/employe`, requestOptions)
    .then(response=>{
          console.log("employes",response);
          return response;
    }).catch(error=>{
         handleResponse(error);
         console.log(error);
    });
}
function saveEmploye(state){
    console.log("employe",state)
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/employe`,state, requestOptions)
    .then(response=>{
          console.log("employe cree",response);
          return response;
    }).catch(error=>{
         console.log(error);
    });
}