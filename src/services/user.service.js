import config from 'config';
import { authHeader } from './helpers/auth-header';
import { handleResponse } from './helpers/handle-response';


export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'POST', headers: authHeader() };
    return fetch(`${config.apiUrl}/auth/user`, requestOptions).then(handleResponse);
}