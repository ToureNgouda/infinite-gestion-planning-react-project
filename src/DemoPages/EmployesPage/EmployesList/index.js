import React from 'react';
import './employeList.css';
import {
    faTrash,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { Container } from './styles';

export const EmployesList = ({ employe ,editEmploye, activerEmploye}) => {
    let isActif;
    if(employe.isActif===1)
        isActif = <td className="badge badge-pill badge-success" onClick={()=>activerEmploye(employe,false)}>Actif</td>;
    else
        isActif  = <td className="badge badge-pill badge-danger" onClick={()=>activerEmploye(employe,true)}>Inactif</td>;
    return (
        <tr  className="employeslist">
            <td onClick={()=>editEmploye(employe)}>{employe.numero}</td>
            <td onClick={()=>editEmploye(employe)}>{employe.prenom}</td>
            <td onClick={()=>editEmploye(employe)}>{employe.nom}</td>
            <td onClick={()=>editEmploye(employe)}>{employe.email}</td>
            <td onClick={()=>editEmploye(employe)}>{employe.genre}</td>
            <td onClick={()=>editEmploye(employe)}>{employe.typeEmploye}</td>
            <td onClick={()=>editEmploye(employe)}>{employe.numeroTelephone}</td>
            <td onClick={()=>editEmploye(employe)}>{employe.adresse_id}</td>
              {isActif}  
            <td className="faTrash"><FontAwesomeIcon icon={faTrash}/></td>
        </tr>
    )
}
