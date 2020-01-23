import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(state) {
    return axios.post(`${config.apiUrl}/auth/login`,state)
        .then(resp => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(resp.data));
            currentUserSubject.next(resp.data);
            return resp;
        }).catch(error=>{
              return error;
        })
}
function logout(state) {
    // remove user from local storage to log user out
    const requestOptions = { headers: authHeader() };
    return axios.post(`${config.apiUrl}/auth/logout`,state,requestOptions)
    .then(resp => {
        localStorage.removeItem('currentUser');
        currentUserSubject.next(null);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        return resp;
    }).catch(error=>{
          handleResponse(error);
    })

}