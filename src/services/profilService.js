import config from 'config';
import { authHeader } from './helpers/auth-header';
import axios from 'axios';


export const profilService = {
    getProfilUser,
    getAllProfil
};

function getProfilUser(user) {
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/getProfilUser`, user,requestOptions).then(resp=>{
          return resp;
    }).catch(error=>{
         console.log(error)
    });
}
function getAllProfil(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/profil`, requestOptions).then(resp=>{
          return resp;
    }).catch(error=>{
         console.log(error)
    });

}