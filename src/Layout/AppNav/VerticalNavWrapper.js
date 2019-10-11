import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import { MainNav, Parametres, Planning, Employes, Utilisateurs } from './NavItems';

class Nav extends Component {
    constructor(props) {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        let profil = user.profil;
        super(props);
        this.state = {
            typeProfil: profil.typeProfil
        }
    }

    render() {
        if (this.state.typeProfil === "Superviseur")
            return (
                <Fragment>
                    <h5 className="app-sidebar__heading">Menu</h5>
                    <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                    <MetisMenu content={Planning} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                </Fragment>
            );
        else
            return (
                <Fragment>
                    <h5 className="app-sidebar__heading">Menu</h5>
                    <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                    <MetisMenu content={Planning} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                    <MetisMenu content={Employes} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                    <MetisMenu content={Utilisateurs} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                    <MetisMenu content={Parametres} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                </Fragment>
            );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(Nav);