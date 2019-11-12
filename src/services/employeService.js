import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';
import axios from 'axios';


export const employeService = {
    getAllEmployes,
    saveEmploye,
    getEmploye,
    updateEmploye,
    getNombreBarman,
    getNombreCommis,
    getNombreSuperviseur,
    getNombreHotesse,
    getVacationActuel,
    getVacationPrecedante,
    getVacationSuivante,
    getVacationSemaine,
    getVacationSemainePrecedente,
    getVacationSemaineSuivante,
    ajouterEmployeToVacation,
    supprimerEmployeToVacation
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
function getEmploye(id){
    console.log("id",id)
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/employe/${id}`, requestOptions)
    .then(response=>{
          console.log("employe recupere",response);
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function updateEmploye(state){
    console.log("state",state)
    let zone='';
    if(state.zone.nom)
       zone=state.zone.nom;
    else
      zone=state.zone
    const request = {
        "id":state.employe.id,
        "numero":state.employe.numero,
        "nom":state.employe.nom,
        "prenom":state.employe.prenom,
        "email":state.employe.email,
        "genre":state.employe.genre,
        "typeEmploye":state.employe.typeEmploye,
        "numeroTelephone":state.employe.numeroTelephone,
        "adresse_id":state.adresse.id,
        "adresse_ville":state.adresse.ville,
        "adresse_quartier":state.adresse.quartier,
        "adresse_complement":state.adresse.complement,
        "zone":zone
    }
    console.log("request",request)
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/employe/${request.id}`, request, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function getNombreBarman(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/getNombreBarman`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function getNombreSuperviseur(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/getNombreSuperviseur`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function getNombreHotesse(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/getNombreHotesse`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function getNombreCommis(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/getNombreCommis`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}

function getVacationActuel(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/vacationActuel`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function getVacationPrecedante(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/vacationPrecedante`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function getVacationSuivante(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/vacationSuivante`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function getVacationSemaine(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/vacation/getVacationsForWeek`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function getVacationSemainePrecedente(state){
    const requestOptions = { headers: authHeader() };
    const object={
  
        "dateDebut": state
        
    };
    return axios.post(`${config.apiUrl}/vacation/getVacationPrecedente`,object, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function getVacationSemaineSuivante(state){
    const requestOptions = { headers: authHeader() };
    const object={
  
        "dateFin": state
        
    };
    return axios.post(`${config.apiUrl}/vacation/getVacationSuivante`,object, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function ajouterEmployeToVacation(state){
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/vacation/ajouterEmployeToVacation`,state, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}
function supprimerEmployeToVacation(state){
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/vacation/supprimerEmployeToVacation`,state, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
    });
}