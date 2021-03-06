import React, { Component, Fragment } from 'react';
import './index.css';

import {
    Col, Row, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Input, CustomInput, Label
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { profilService } from '../../services/profilService';
import { userService } from '../../services/userService';

// import { Container } from './styles';

export default class ProfilePage extends Component {
    
    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem('currentUser'));
        let profil = user.profil;
        this.state = {
            user: user,
            typeProfil: profil.typeProfil,
            redirect: false,
            userMount: true,
            passwordActuel:'',
            newPassword:'',
            confirmeNewPassword:'',
            isPasswordActuel:true,
            isConfirmeNewPassword:true,
            disableSubmitButton:false,
            isEmailEmpty:false,
            isNomEmpty:false,
            isPrenomEmpty:false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        userService.modifierProfileUser(this.state).then(result=>{
              if(result && result.status===200){
                    if(result.data.isReconnect){
                        localStorage.setItem('currentUser', JSON.stringify(result.data));
                    }
                    toast.info("Profile mise à jour avec succés", {
                        position: toast.POSITION.TOP_CENTER
                    });
              }else{
                  toast.error("Une erreur s'est produite coté serveur", {
                    position: toast.POSITION.TOP_CENTER
                });
              } 
        })
    }
    handleChange = e => {
        const { name, value } = e.target;
        const user = { ...this.state.user };
        if (name === "nom") {
            user.nom = value;
            this.setState({ user });
            if(value=== ''){
                this.setState({ isNomEmpty:true});
                this.setState({ disableSubmitButton:true});
            }else{
                this.setState({ isNomEmpty:false});
                this.setState({ disableSubmitButton:false}); 
            }
              
        }
        if (name === "prenom") {
            user.prenom = value;
            this.setState({ user });
            if(value=== ''){
                this.setState({ isPrenomEmpty:true});
                this.setState({ disableSubmitButton:true});
            }else{
                this.setState({ isPrenomEmpty:false});
                this.setState({ disableSubmitButton:false}); 
            }
        }
        if (name === "email") {
            user.email = value;
            this.setState({ user });
            if(value=== ''){
                this.setState({ isEmailEmpty:true});
                this.setState({ disableSubmitButton:true});
            }else{
                this.setState({ isEmailEmpty:false});
                this.setState({ disableSubmitButton:false}); 
            }
        }
        if (name === "passwordActuel") {
            const passwordActuel = value;
            this.setState({ passwordActuel });
        }
        if (name === "newPassword") {
            const newPassword = value;
            this.setState({ newPassword });
            userService.verifierPasswordUser(this.state).then(result=>{
                    if(result && result.status === 200){
                        this.setState({ isPasswordActuel: result.data });
                        if(result.data === false)
                           this.setState({ disableSubmitButton:true});
                        else
                           this.setState({ disableSubmitButton:false});
                    }
            })
        }
        if (name === "confirmeNewPassword") {
            const confirmeNewPassword = value;
            this.setState({ confirmeNewPassword });
            if(this.state.newPassword !== value){
                this.setState({ disableSubmitButton:true });
                this.setState({ isConfirmeNewPassword: false});
            }else {
                this.setState({ disableSubmitButton:false });
                this.setState({ isConfirmeNewPassword: true});  
            }
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
                                    <div>Mon Profile</div>
                                </Col>
                                <Col md={2} className="pull-right">
                                    <div>
                                    {this.state.user.isActif &&
                                        <Button className="btn btn-success but" disabled> Actif</Button>}
                                    {!this.state.user.isActif &&
                                        <Button className="btn btn-danger but" disabled> Inactif</Button>}
                                    </div>
                                </Col>
                                </Row>
                            </CardTitle>
                            <Form className="form" onSubmit={this.handleSubmit}>
                                <FormGroup className="cardProfile">
                                    <Row form>
                                        <Col md={6}>
                                            <Label for="exampleEmail11" className="lab">Nom</Label>
                                        </Col>
                                        <Col md={6} >
                                            <Input type="text" name="nom" className="admin"
                                                placeholder="Nom" value={this.state.user.nom} onChange={this.handleChange} />
                                           {this.state.isNomEmpty && 
                                                <Label className="errorPassword">ce champ ne doit pas  etre vide </Label>
                                               }
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            <Label for="prenom" className="lab">Prenom</Label>
                                        </Col>
                                        <Col md={6}>
                                            <Input type="text" name="prenom" className="admin"
                                                placeholder="Prénom" value={this.state.user.prenom} onChange={this.handleChange} />
                                              {this.state.isPrenomEmpty && 
                                                <Label className="errorPassword">ce champ ne doit pas  etre vide </Label>
                                               }
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            <Label for="email" className="lab">Email</Label>
                                        </Col>
                                        <Col md={6}> 
                                            <Input type="text" name="email" className="admin"
                                                placeholder="Email" value={this.state.user.email} onChange={this.handleChange} />
                                             {this.state.isEmailEmpty && 
                                                <Label className="errorPassword">ce champ ne doit pas  etre vide </Label>
                                               }
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col  md={6}>
                                            <Label for="typeProfil" className="lab">Type Profil</Label>
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
                                            <Label for="passwordActuel" className="lab"> Mot de passe actuel</Label>
                                        </Col>
                                        <Col  md={6}>
                                            <Input  type="password" name="passwordActuel" value={this.state.passwordActuel}
                                                placeholder="Entrer le mot de passe actuel" onChange={this.handleChange} />
                                              {!this.state.isPasswordActuel && 
                                                <Label className="errorPassword">Le mot de passe entre ne correspond pas au mot de passe actuel </Label>
                                               }
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col  md={6}>
                                            <Label for="newPassword" className="lab"> Nouveau mot de passe</Label>
                                        </Col>
                                        <Col  md={6}>
                                            <Input  type="password" name="newPassword" value={this.state.newPassword}
                                                placeholder="Entrer le nouveau mot de passe" onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col  md={6}>
                                            <Label for="confirmeNewPassword" className="lab">Confirmer nouveau mot de passe</Label>
                                        </Col>
                                        <Col  md={6}>
                                            <Input  type="password" name="confirmeNewPassword" value={this.state.confirmeNewPassword}
                                                placeholder="Confirmer le nouveau mot de passe " onChange={this.handleChange} />
                                              {!this.state.isConfirmeNewPassword && 
                                                <Label className="errorPassword">Les mots de passe entrés ne correspondent pas </Label>
                                               }
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <Button color="primary" className="mt-2 mr-2 pull-right" type="submit" disabled={this.state.disableSubmitButton}> Enregistrer </Button>
                                <ToastContainer />
                            </Form>
                        </CardBody>}
                </Card>
            </Fragment>
        )
    }
}
