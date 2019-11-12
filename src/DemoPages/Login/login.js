import React, { Component } from 'react';
import { authenticationService } from '../../services/authentificationService';
import { Redirect , Route} from 'react-router-dom';
import AppMain from '../../Layout/AppMain';
import {
  Button, Form,
  FormGroup, Label,
  Input, Row, Col,
  Card, CardBody, CustomInput,

} from 'reactstrap';
import { from } from 'rxjs';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Container } from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    // redirection vers la home page si le user est connecté
    this.state = {
      email: '',
      password: '',
      redirect:false
    }
  }
  handleSubmit = event => {
    console.log("login ", this.state.email, "and mot de passe ", this.state.password);
    event.preventDefault();
    //appel au actions pour une connexion avec le backend et utiliser l'api,
  
    authenticationService.login(this.state)
      .then(
        response => {
            if(response && response.status === 200){
              this.setState({redirect:true}) 
            }else{
              toast.error(`une erreur est survenue coté serveur veuillez réessayer svp ou verifier le login et le mot de passe `, {
                position: toast.POSITION.TOP_CENTER
            });
            }
        },
        error => {
          console.log("erreur coté serveur", error);
        }
      );


  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("state manage", this.state)
  }
  render() {
    if(this.state.redirect){
       return (<Redirect to={'/dashboard'} />)
    }
    return (
      <div className="login">
        <Row>
          <Col md="7">
            <Card className="main-card mb-3">
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="email"
                      placeholder="Entre votre email" value={this.state.email} onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="password"
                      placeholder="Entre votre mot de passe" value={this.state.password} onChange={this.handleChange} />
                  </FormGroup>
                  <Button color="primary" className="mt-1" >Connexion</Button>
                 <ToastContainer /> 
                  <CustomInput type="checkbox" id="exampleCustomCheckbox"
                    label="Se souvenir de moi" />
                </Form>
              </CardBody>
            </Card>
            <ToastContainer /> 
          </Col>
        </Row>
      </div>

    )
  }

}
