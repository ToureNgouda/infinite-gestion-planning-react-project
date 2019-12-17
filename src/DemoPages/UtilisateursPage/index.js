import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import { userService } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Table, CardTitle, CardBody, Card, Button, Row, Col } from 'reactstrap';
import { ShowUsers } from './ShowUsers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route } from 'react-router-dom';
import {

    faPlus,

} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import CreerUser from './CreateUser';
import EditUser from  './EditUser';

export default class UtilisateursPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            profil: '',
            match: this.props.match,
            isEditUser:false
        }
        this.getAllUsers();
    }
    createUser = (user) => {
        const users = [...this.state.users];
        users.push(user);
        this.setState({ users });
    }
    editUser = ( user )=>{
        console.log("fonction edit user appele", user)
        this.props.history.push(`/utilisateurs/${user.id}`);
        this.setState({ isEditUser:true});
    }
    getAllUsers() {
        userService.getAllUsers().then(resp => {
            if (resp.status === 200)
                this.setState({ users: resp.data });
        }).catch(error => {
            console.log("error cote serveur", error);
        })
    }
    updateUser(users){
       this.setState( { users });
    }
    render() {
        const users = this.state.users.map(user =>
            <ShowUsers key={user.id}
                user={user}  editUser={this.editUser}
            />
        )
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Route exact strict path={`${this.state.match.url}`} render={() =>
                                (
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>
                                                <Row>
                                                    <Col md="10">Liste Utilisateurs</Col>
                                                    <Col md="2" >
                                                        <Link to="/utilisateurs/creerUser">
                                                            <Button outline color="secondary">
                                                                <FontAwesomeIcon icon={faPlus} /> {'   '}
                                                                <span >Ajouter</span>
                                                            </Button>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </CardTitle>
                                            <Table responsive className="mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Prénom</th>
                                                        <th>Nom</th>
                                                        <th>Email</th>
                                                        <th>Profil</th>
                                                        <th>Date création</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users}
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
                                )} />
                            <Route exact path='/utilisateurs/creerUser' component={CreerUser} createUser={this.createUser}></Route>
                            {this.state.isEditUser &&
                                <Route exact path='/utilisateurs/:id' component={EditUser} updateUser={this.updateUser}></Route>
                            }
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
