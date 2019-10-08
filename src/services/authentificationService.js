import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { handleResponse } from './helpers/handle-response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(state) {
    return fetch(`${config.apiUrl}/auth/user`,  {
        method:'POST',
        body:JSON.stringify(state),
        headers:{
            'content-type':'application/json',
            'Access-Control-Allow-Origin':'*'
        }
        })
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        })
        .catch(error=>{
            console.log(error);
            return error;
        });
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}