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
    supprimerEmployeToVacation,
    verifierPresenceInVacation,
    getAllEmployeWithNumberVacation,
    getNombreCoordonnateur
};

function getAllEmployes() {
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/employe/getEmployeActif`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         handleResponse(error);
         console.log(error);
    });
}
function saveEmploye(state){
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/employe`,state, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
        //  console.log(error);
        handleResponse(error);
    });
}
function getEmploye(id){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/employe/${id}`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}
function updateEmploye(state){
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
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/employe/${request.id}`, request, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}
function getNombreBarman(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/getNombreBarman`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}
function getNombreSuperviseur(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/getNombreSuperviseur`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}
function getNombreHotesse(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/getNombreHotesse`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         handleResponse(error);
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
         handleResponse(error);
    });
}
function getNombreCoordonnateur(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/getNombreCoordonnateur`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}

function getVacationActuel(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/vacationActuel`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
        handleResponse(error);
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
         handleResponse(error);
    });
}
function getVacationSuivante(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/vacationSuivante`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}
function getVacationSemaine(){
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/vacation/getVacationsForWeek`, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
        handleResponse(error);
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
        handleResponse(error);
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
         handleResponse(error);
    });
}
function ajouterEmployeToVacation(state){
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/vacation/ajouterEmployeToVacation`,state, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}
function supprimerEmployeToVacation(state){
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/vacation/supprimerEmployeToVacation`,state, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}
function verifierPresenceInVacation(state){
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/verifierPresenceInVacation`,state, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}
function getAllEmployeWithNumberVacation(state){
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/getAllEmployeWithNumberVacation`,state, requestOptions)
    .then(response=>{
          return response;
    }).catch(error=>{
         console.log(error);
         handleResponse(error);
    });
}