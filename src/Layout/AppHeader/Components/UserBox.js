import React, {Fragment} from 'react';
import authentificationSerivce, { authenticationService } from '../../../services/authentificationService';
import { Redirect }  from 'react-router-dom';

import {
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
     UncontrolledButtonDropdown
} from 'reactstrap';

import {
    toast,
    Bounce
} from 'react-toastify';


import {
    
    faAngleDown

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import profil from '../../../assets/utils/images/avatars/profil.png';
import { isThisSecond } from 'date-fns';

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem('currentUser'));
        let profil = user.profil;
        this.state = {
            user:user,
            active: false,
            nom:user.nom,
            prenom:user.prenom,
            typeProfil: profil.typeProfil,
            redirect:false,
            redirectToProfile:false
        }
    }

    notify2 = () => this.toastId = toast("You don't have any new items in your calendar for today! Go out and play!", {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });
    
    handleLogout = ()=>{
      authenticationService.logout(this.state).then(resp=>{
           if(resp && resp.status===200)
              this.setState({redirect:true})
      }).catch(error=>{
      })
    }
    handleProfile = ()=>{
       this.setState({ redirectToProfile: true})
    // 
    }
  
    render() {
        if(this.state.redirect){
            return (<Redirect  to={'/login'}/>)
        }
        if(this.state.redirectToProfile){
            return (<Redirect  to={'/profile'}/>)
        }
        return (
            <Fragment>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="link" className="p-0">
                                        <img width={42} className="rounded-circle" src={profil} alt=""/>
                                        <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleDown}/>
                                    </DropdownToggle>
                                    <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                                        <Nav vertical>
                                            <NavItem className="nav-item-header">
                                                Mon Compte
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={this.handleProfile}>
                                                    Profile
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={this.handleLogout}>
                                                    Deconnexion
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>
                            <div className="widget-content-left  ml-3 header-user-info">
                                <div className="widget-heading">
                                    {this.state.prenom} {this.state.nom}
                                </div>
                                <div className="widget-subheading">
                                    ( {this.state.typeProfil} )
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserBox;