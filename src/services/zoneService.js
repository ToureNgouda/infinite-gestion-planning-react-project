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
          console.log("la liste des zone dans la base",resp.data);
          return resp.data;
    }).catch(error=>{
      handleResponse(error);
          console.log("error coté serveur",error);
    })
}