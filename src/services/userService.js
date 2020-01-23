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
          return users;
    }).catch(error=>{
        handleResponse(error);
    });
}
function saveUser(user) {
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/user`, user,requestOptions).then(users=>{
          return user;
    }).catch(error=>{
        handleResponse(error);
    });
}
function getUser(id) {
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/user/${id}`,requestOptions).then(user=>{
          return user;
    }).catch(error=>{
        handleResponse(error);
    });
}
function updateUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/user/${state.user.id}`,state,requestOptions).then(user=>{
          return user;
    }).catch(error=>{
        handleResponse(error);
    });
}
function verifierPasswordUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/user/verifierPasswordUser`,state,requestOptions).then(user=>{
          return user;
    }).catch(error=>{
        handleResponse(error);
    });
}
function modifierProfileUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/user/modifierProfileUser`,state,requestOptions).then(user=>{
          return user;
    }).catch(error=>{
        handleResponse(error);
    });
}
function activerUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/user/activerUser/${state.id}`,state,requestOptions).then(user=>{
          return user;
    }).catch(error=>{
        handleResponse(error);
    });
}

function desactiverUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/user/desactiverUser/${state.id}`,state,requestOptions).then(user=>{
          return user;
    }).catch(error=>{
        handleResponse(error);
    });
}

function supprimerUser(state) {
    const requestOptions = { headers: authHeader() };
    return axios.put(`${config.apiUrl}/user/supprimerUser/${state.id}`,state,requestOptions).then(user=>{
          return user;
    }).catch(error=>{
        handleResponse(error);
    });
}
