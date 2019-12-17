import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';
import axios from 'axios';


export const typeEmployeService ={
    typeEmploye,
    genre,
    getHoraire
}
 function typeEmploye(){
   return [
    {id:1,nom:"Superviseur"},
    {id:2,nom:"Commis Cuisine"},
    {id:3,nom:"Hotesse"},
    {id:4,nom:"Barman"},
    {id:5,nom:"Coordonnateur Cuisine"}
] 
}
function genre(){
    return [
       {id:1,nom:"Homme"},
         {id:2,nom:"Femme"}
    ]
}
// function getHoraire(){
//     return [
//        {id:1,heure:"08h-16h"},
//        {id:2,heure:"16h-00h"},
//        {id:3,heure:"00h-08h"}
//     ]
// }
function getHoraire(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/tranchehoraire`, requestOptions).then(resp=>{
          return resp;
    }).catch(error=>{
        handleResponse(error);
         console.log(error)
    });

}