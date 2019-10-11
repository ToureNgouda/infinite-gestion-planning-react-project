import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';
import axios from 'axios';


export const userService = {
    getAllUsers
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