import React, { Component, Fragment } from 'react';

import {
    Col, Row, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Input, CustomInput, Label
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { profilService } from '../../services/profilService';
import { userService } from '../../services/userService';
import './index.css';

// import { Container } from './styles';

export default class ProfilePage extends Component {
    getAllProfil = () => {
        return profilService.getAllProfil().then(resp => {
            console.log("la liste des profils", resp)
            if (resp.status === 200) {
                const profils = resp.data;
                this.setState({ profils });
                this.setState({ profil: profils[0].typeProfil })
            }
        })
    }
    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem('currentUser'));
        let profil = user.profil;
        this.state = {
            user: user,
            typeProfil: profil.typeProfil,
            redirect: false,
            userMount: true
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("state", this.state);
        userService.updateUser(this.state).then(result => {
            if (result && result.status === 200) {
                console.log(result.data);
                // userService.getAllUsers().then(resp => {
                //     if (resp && resp.status === 200) {
                //         const users = resp.data;

                //     }
                // }).catch(error => {
                //     console.log("error cote serveur", error);
                // })
                this.props.history.push("/utilisateurs");
            }
        })
    }
    handleChange = e => {
        const { name, value } = e.target;
        const user = { ...this.state.user };
        if (name === "nom") {
            user.nom = value;
            this.setState({ user });
        }
        if (name === "prenom") {
            user.prenom = value;
            this.setState({ user });
        }
        if (name === "email") {
            user.email = value;
            this.setState({ user });
        }
        if (name === "profil") {
            user.profil = value;
            this.setState({ user });
        }
    }
    render() {
        return (
            <Fragment>
                <Card className="main-card mb-3 profile">
                    {this.state.userMount &&
                        <CardBody>
                            <CardTitle>
                                <Row>
                                <Col md={10}>
                                    <div> Modifier Mon Profile</div>
                                </Col>
                                <Col md={2} className="pull-right">
                                    <div>
                                    {!this.state.user.isActif &&
                                        <Button className="btn btn-success" disabled> Actif</Button>}
                                    {this.state.user.isActif &&
                                        <Button className="btn btn-danger" disabled> Inactif</Button>}
                                    </div>
                                </Col>
                                </Row>
                            </CardTitle>
                            <Form className="form" onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            <Label for="exampleEmail11">Nom</Label>
                                        </Col>
                                        <Col md={6}>
                                            <Input type="text" name="prenom"
                                                placeholder="Prénom" value={this.state.user.nom} onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            <Label for="exampleEmail11">Prenom</Label>
                                        </Col>
                                        <Col md={6}>
                                            <Input type="text" name="prenom"
                                                placeholder="Prénom" value={this.state.user.prenom} onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            <Label for="exampleEmail11">Email</Label>
                                        </Col>
                                        <Col md={6}>
                                            <Input type="text" name="email"
                                                placeholder="Email" value={this.state.user.email} onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col  md={6}>
                                            <Label for="typeProfil">Type Profil</Label>
                                        </Col>
                                        <Col  md={6}>
                                            <CustomInput type="select" name="profil" id="profil"
                                                onChange={this.handleChange} disabled>
                                                <option value={this.state.typeProfill} >{this.state.typeProfil}</option>
                                            </CustomInput>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col  md={6}>
                                            <Label for="typeProfil"> Mot de passe actuel</Label>
                                        </Col>
                                        <Col  md={6}>
                                            <Input type="text" name="email"
                                                placeholder="Entrer le mot de passe actuel" onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col  md={6}>
                                            <Label for="typeProfil"> Nouveau mot de passe</Label>
                                        </Col>
                                        <Col  md={6}>
                                            <Input type="text" name="email"
                                                placeholder="Entrer le nouveau mot de passe" onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col  md={6}>
                                            <Label for="typeProfil">Confirmer nouveau mot de passe</Label>
                                        </Col>
                                        <Col  md={6}>
                                            <Input type="text" name="email"
                                                placeholder="Confirmer le nouveau mot de passe " onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <Button color="primary" className="mt-2 mr-2 pull-right" type="submit"> Modifier </Button>
                                <ToastContainer />
                            </Form>
                        </CardBody>}
                </Card>
            </Fragment>
        )
    }
}
