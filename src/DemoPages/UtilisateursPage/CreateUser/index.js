import React, { Component, Fragment } from 'react';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Col, Row, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Input, CustomInput, Label
} from 'reactstrap';
import { profilService } from '../../../services/profilService';
import { userService } from '../../../services/userService';


// import { Container } from './styles';

export default class EmployeCreate extends Component {
    getAllProfil=()=>{
        return profilService.getAllProfil().then(resp=>{
          
                 if(resp.status===200){
                    const profils = resp.data;
                    this.setState({profils});
                    this.setState({profil:profils[0].typeProfil})
                 }
        })
    }
    constructor(props){
        super(props);
        this.getAllProfil();
        this.state={
            nom:'',
            prenom:'',
            email:'',
            profil:'',
            profils:[],
            isRedirect:false,
            confirmePassword:'',
            password:'',
            isConfirmePassword:true,
            disableSubmitButton:true
        }
    }
   
    handleSubmit=(event)=>{
        event.preventDefault();
       return userService.saveUser(this.state).then(resp=>{
              if(resp){
                this.setState({isRedirect:true});
                toast.success(`user ajouté avec succés`, {
                    ptoastosition: toast.POSITION.TOP_CENTER
                });
                this.props.history.push('/utilisateurs');
                window.location.reload(false);
              }else {
                toast.error(`une erreur est survenue coté serveur`, {
                    ptoastosition: toast.POSITION.TOP_CENTER
                });
              }
                 
       });
    }
   handleChange = e=>{
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === "confirmePassword") {
        if(this.state.password !== value){
            this.setState({ disableSubmitButton:true });
            this.setState({ isConfirmePassword: false});
        }else {
            this.setState({ disableSubmitButton:false });
            this.setState({ isConfirmePassword: true});  
        }
    }
   }
    render() {
        return (
            <Fragment>
                {/* <AppHeader /> */}
                            <Card className="main-card mb-3 createUser">
                                <CardBody>
                                    <CardTitle className="heading">Création Utilisateur</CardTitle>
                                    <Form className="form" onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <Row form>
                                                <Col md={6}>
                                                    {/* <Label for="exampleEmail11">Email</Label> */}
                                                    <Input type="text" name="nom" 
                                                        placeholder="Nom"  value={this.state.nom} onChange={this.handleChange}/>
                                                </Col>
                                                <Col md={6}>
                                                    <Input type="text" name="prenom" 
                                                        placeholder="Prénom"  value={this.state.prenom} onChange={this.handleChange}/>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row form>
                                            <Col md={6}>
                                                    <Input type="text" name="email" 
                                                        placeholder="Email"  value={this.state.email} onChange={this.handleChange}/>
                                                </Col>
                                                <Col md="6">
                                                <CustomInput type="select" name="profil"  id="profil"
                                                              onChange={this.handleChange}>
                                                    {this.state.profils.map(profil=>
                                                         <option key={profil.id} value={profil.typeProfil} >{profil.typeProfil}</option>
                                                        )}
                                                </CustomInput>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                            <Col md={6}>
                                                    <Input type="password" name="password" 
                                                        placeholder="Mot de Passe"  value={this.state.password} onChange={this.handleChange}/>
                                                </Col>
                                                <Col md={6}>
                                                    <Input type="password" name="confirmePassword" 
                                                        placeholder="Confirmer mot de Passe"  value={this.state.confirmePassword} onChange={this.handleChange}/>
                                                     {!this.state.isConfirmePassword && 
                                                <Label className="errorPassword">Les mots de passe entrés ne correspondent pas </Label>
                                               }
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <Button color="primary" className="mt-2 mr-2 pull-right" disabled={this.state.disableSubmitButton}>Créer </Button>
                                        <ToastContainer />
                                    </Form>
                                </CardBody>
                            </Card>
            </Fragment>
        )
    }
}
