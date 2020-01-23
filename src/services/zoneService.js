import axios from 'axios';
import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';


export const zoneService ={
   getAllZone
}

function getAllZone(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/zone`, requestOptions).then(resp=>{
          return resp.data;
    }).catch(error=>{
      handleResponse(error);
    })
}