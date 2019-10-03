import React, { Component } from 'react';
import {
  Button, Form,
  FormGroup, Label,
  Input, Row , Col,
  Card, CardBody, CustomInput,

} from 'reactstrap';

// import { Container } from './styles';

export default class Login extends Component {
     constructor(props){
       super(props);
      this.state= {
        login:'',
        password:''
      }
     }
  onConnect = event=>{
      console.log("login ",this.state.login,"and mot de passe ",this.state.password);
      event.preventDefault();

  }
  handleChangeEmail= event =>{
    const login = event.currentTarget.value;
    console.log(login)
    this.setState({login})
  }
  handleChangePassword= event=>{
    const password = event.currentTarget.value;
    console.log(password)
    this.setState({password});
  }
  render() {
    return (

      <div className="login">
        <Row>
        <Col md="7">
        <Card className="main-card mb-3">
          <CardBody>
            <Form onSubmit={this.onConnect}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="email"
                  placeholder="Entre votre email"  value={this.state.login} onChange={this.handleChangeEmail}/>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="password"
                  placeholder="Entre votre mot de passe" value={this.state.password} onChange={this.handleChangePassword}/>
              </FormGroup>
              <Button color="primary" className="mt-1" >Connexion</Button>
              <CustomInput type="checkbox" id="exampleCustomCheckbox"
                label="Se souvenir de moi" />
            </Form>
          </CardBody>
        </Card>
        </Col>
        </Row>
      </div>

    )
  }
  
}
