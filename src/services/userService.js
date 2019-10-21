import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';
import axios from 'axios';


export const userService = {
    getAllUsers,
    saveUser
};

function getAllUsers() {
    const requestOptions = { headers: authHeader() };
    return axios.get(`${config.apiUrl}/user`, requestOptions).then(users=>{
          console.log("users",users);
          return users;
    }).catch(error=>{
         console.log(error)
    });
}
function saveUser(user) {
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/user`, user,requestOptions).then(users=>{
          console.log("user crée ",user);
          return user;
    }).catch(error=>{
         console.log(error)
    });
}