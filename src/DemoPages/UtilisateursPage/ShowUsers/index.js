import React from 'react';
import './showUsers.css';
import {
    faTrash,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { Container } from './styles';

export const ShowUsers = ({ user, editUser , activerUser, desactiverUser ,openModal}) => {
    let isActif;
    if(user.isActif===1)
        isActif = <td className="badge badge-pill badge-success" onClick={()=>desactiverUser(user)}>Actif</td>;
    else
        isActif  = <td className="badge badge-pill badge-danger" onClick={()=>activerUser(user)}>Inactif</td>
    return (
        <tr  className="usersList">
            <td onClick={()=>editUser(user)}>{user.prenom}</td>
            <td onClick={()=>editUser(user)}>{user.nom}</td>
            <td onClick={()=>editUser(user)}>{user.email}</td>
            <td onClick={()=>editUser(user)}>{user.profil_id}</td>
            <td onClick={()=>editUser(user)}>{user.created_at}</td>
            {isActif}
            <td className="faTrash" onClick={()=>openModal(user)}><FontAwesomeIcon icon={faTrash}/></td>
        </tr>
    )
}
