import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';
import axios from 'axios';


export const userService = {
    getAllUsers,
    saveUser,
    getUser,
    updateUser,
    verifierPasswordUser,
    modifierProfileUser,
    activerUser,
    desactiverUser,
    supprimerUser
};

function getAllUsers() {
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/user`, requestOptions).then(users=>{
          console.log("users",users);
          return users;
    }).catch(error=>{
        handleResponse(error);
         console.log(error)
    });
}
function saveUser(user) {
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/user`, user,requestOptions).then(users=>{
          console.log("user crée ",user);
          return user;
    }).catch(error=>{
        handleResponse(error);
         console.log(error);
    });
}
function getUser(id) {
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/user/${id}`,requestOptions).then(user=>{
          console.log("user recupere ",user);
          return user;
    }).catch(error=>{
        handleResponse(error);
         console.log(error);
    });
}
function updateUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/user/${state.user.id}`,state,requestOptions).then(user=>{
          console.log("user recupere ",user);
          return user;
    }).catch(error=>{
        handleResponse(error);
         console.log(error);
    });
}
function verifierPasswordUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/user/verifierPasswordUser`,state,requestOptions).then(user=>{
          console.log("user recupere ",user);
          return user;
    }).catch(error=>{
        handleResponse(error);
         console.log(error);
    });
}
function modifierProfileUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/user/modifierProfileUser`,state,requestOptions).then(user=>{
          console.log("user recupere ",user);
          return user;
    }).catch(error=>{
        handleResponse(error);
         console.log(error);
    });
}
function activerUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/user/activerUser/${state.id}`,state,requestOptions).then(user=>{
          console.log("user recupere ",user);
          return user;
    }).catch(error=>{
        handleResponse(error);
         console.log(error);
    });
}

function desactiverUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/user/desactiverUser/${state.id}`,state,requestOptions).then(user=>{
          console.log("user recupere ",user);
          return user;
    }).catch(error=>{
        handleResponse(error);
         console.log(error);
    });
}

function supprimerUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/user/supprimerUser/${state.id}`,state,requestOptions).then(user=>{
          console.log("user recupere ",user);
          return user;
    }).catch(error=>{
        handleResponse(error);
         console.log(error);
    });
}
