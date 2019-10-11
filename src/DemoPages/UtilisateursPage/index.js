import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import { userService } from '../../services/userService';
import { Table, CardTitle, CardBody, Card } from 'reactstrap';
import { ShowUsers }  from './ShowUsers';

export default class UtilisateursPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            profil:''
        }
        this.getAllUsers();
    }
    getAllUsers() {
        userService.getAllUsers().then(resp => {
            if (resp.status === 200)
                this.setState({ users: resp.data });
        }).catch(error => {
            console.log("error cote serveur", error);
        })
    }
    render() {
        const users = this.state.users.map(user =>
            <ShowUsers key={user.id} 
            user={user} 
            />
        )
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Liste Utilisateurs</CardTitle>
                                    <Table responsive className="mb-0">
                                        <thead>
                                            <tr>
                                                <th>Prenom</th>
                                                <th>Nom</th>
                                                <th>Email</th>
                                                <th>Profil</th>
                                                <th>Date Creation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users}
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
