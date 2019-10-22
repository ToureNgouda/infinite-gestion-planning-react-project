import React from 'react';
import './employeList.css';
import {
    faTrash,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { Container } from './styles';

export const EmployesList = ({ employe ,editEmploye}) => {
    let isActif;
    if(employe.isActif===1)
        isActif = <td className="badge badge-pill badge-success">Actif</td>;
    else
        isActif  = <td className="badge badge-pill badge-danger">Inactif</td>;
    return (
        <tr onClick={()=>editEmploye(employe)}>
            <td>{employe.numero}</td>
            <td>{employe.prenom}</td>
            <td>{employe.nom}</td>
            <td>{employe.email}</td>
            <td>{employe.genre}</td>
            <td>{employe.typeEmploye}</td>
            <td>{employe.numeroTelephone}</td>
            <td>{employe.adresse_id}</td>
              {isActif}  
            <td className="faTrash"><FontAwesomeIcon icon={faTrash}/></td>
        </tr>
    )
}
