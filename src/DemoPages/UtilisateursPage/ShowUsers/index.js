import React from 'react';
// import { Container } from './styles';

export const ShowUsers = ({ user }) => {
    return (
        <tr>
            <td>{user.prenom}</td>
            <td>{user.nom}</td>
            <td>{user.email}</td>
            <td>{user.profil_id}</td>
            <td>{user.created_at}</td>
        </tr>
    )
}
