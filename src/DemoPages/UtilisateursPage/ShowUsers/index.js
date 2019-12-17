import React from 'react';
import './showUsers.css';
// import { Container } from './styles';

export const ShowUsers = ({ user, editUser }) => {
    let isActif;
    if(user.isActif===1)
        isActif = <td className="badge badge-pill badge-success">Actif</td>;
    else
        isActif  = <td className="badge badge-pill badge-danger">Inactif</td>
    return (
        <tr onClick={()=>editUser(user)}>
            <td>{user.prenom}</td>
            <td>{user.nom}</td>
            <td>{user.email}</td>
            <td>{user.profil_id}</td>
            <td>{user.created_at}</td>
            {isActif}
        </tr>
    )
}
