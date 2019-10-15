import React, { Component, Fragment } from 'react';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import { userService } from '../../services/userService';
import { Table, CardTitle, CardBody, Card ,Row} from 'reactstrap';
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
                                    <CardTitle>
                                    <Row>
                                                    <Col md="8">Liste Employés</Col>
                                                    <Col md="4" className="ajouter">
                                                        <Link to="/employes/creerEmploye">
                                                            <Button outline color="secondary" onClick={this.handleAddEmploye}>
                                                                <FontAwesomeIcon icon={faPlus} /> {'   '}
                                                                <span>Ajouter</span>
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
