import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';
import axios from 'axios';


export const employeService = {
    getAllEmployes
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