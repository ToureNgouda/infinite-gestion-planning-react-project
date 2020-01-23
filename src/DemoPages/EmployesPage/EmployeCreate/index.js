import React, { Component, Fragment } from 'react';
import { typeEmployeService } from '../../../services/typeEmployeService';
import './index.css';
import { zoneService } from '../../../services/zoneService';
import {
    Col, Row, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input, CustomInput
} from 'reactstrap';
import { employeService } from '../../../services/employeService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import { Container } from './styles';

export default class EmployeCreate extends Component {
    getAllZone=()=>{
        return zoneService.getAllZone().then(resp=>{
                const zones = resp;
                this.setState({zones});
                this.setState({zone:zones[0].nom})
        })
    }
    constructor(props){
        super(props);
        const genres =typeEmployeService.genre();
        const typeEmployes=typeEmployeService.typeEmploye();
        this.getAllZone();
        this.state={
            typeEmployes:typeEmployes,
            genres:genres,
            zones:[],
            nom:'',
            prenom:'',
            email:'',
            ville:'',
            quartier:'',
            complement:'',
            zone:'',
            typeEmploye:'Superviseur',
            numeroTelephone:'',
            genre:'Homme',
            numero:'',
            isRedirect:false
        }
    }
   
    handleSubmit=(event)=>{
        event.preventDefault();
       return employeService.saveEmploye(this.state).then(resp=>{
              if(resp && resp.status === 200){
                toast.success(`${resp.data.prenom} ${resp.data.nom} a été ajouté avec succés`, {
                    ptoastosition: toast.POSITION.TOP_CENTER
                });
                this.setState({ isRedirect:true });
                this.props.history.push('/employes');
                window.location.reload(false);
              }else {
                toast.error(`une erreur est survenue coté serveur`, {
                    position: toast.POSITION.TOP_CENTER
                });
              }
                 
       });
    }
   handleChange = e=>{
    const { name, value } = e.target;
    this.setState({ [name]: value });
   }
    render() {
        return (
            <Fragment>
                {/* <AppHeader /> */}
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle className="heading">Création Employé</CardTitle>
                                    <Form className="form" onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <Row form>
                                            <Col md={3}>
                                                    {/* <Label for="exampleEmail11">Email</Label> */}
                                                    <Input type="number" name="numero" 
                                                        placeholder="Numéro Employé" value={this.state.numero}  onChange={this.handleChange}/>
                                                </Col>
                                                <Col md={3}>
                                                    {/* <Label for="exampleEmail11">Email</Label> */}
                                                    <Input type="text" name="nom" 
                                                        placeholder="Nom"  value={this.state.nom} onChange={this.handleChange}/>
                                                </Col>
                                                <Col md={3}>
                                                    <Input type="text" name="prenom" 
                                                        placeholder="Prénom"  value={this.state.prenom} onChange={this.handleChange}/>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row form>
                                            <Col md={3}>
                                                    <Input type="text" name="email" 
                                                        placeholder="Email"  value={this.state.email} onChange={this.handleChange}/>
                                                </Col>
                                                <Col md="3">
                                                    {/* <Label for="exampleEmail11">Email</Label> */}
                                                    <Input type="text" name="numeroTelephone" 
                                                        placeholder="Téléphone"   value={this.state.numeroTelephone} onChange={this.handleChange}/>
                                                </Col>
                                                <Col md="3">
                                                <CustomInput type="select" name="genre"  id="genre"
                                                              onChange={this.handleChange}>
                                                    {this.state.genres.map(g=>
                                                         <option key={g.id} value={g.nom} >{g.nom}</option>
                                                        )}
                                                </CustomInput>
                                                </Col>
                                                <Col md="3">
                                                <CustomInput type="select"   placeholder="type Employe" id="typeEmploye"
                                                             name="typeEmploye" onChange={this.handleChange}>
                                                   {this.state.typeEmployes.map(type=>
                                                       <option  value={type.nom} key={type.id}>{type.nom}</option>
                                                   )}
                                                </CustomInput>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        
                                        <FormGroup>
                                            <Label for="adresse">Adresse</Label>
                                            <Row form>
                                                <Col md="3">
                                                    <Input type="text" name="ville"
                                                        placeholder="Ville"  value={this.state.ville} onChange={this.handleChange}/>
                                                </Col>
                                                <Col md="3">
                                                    <Input type="text" name="quartier" 
                                                        placeholder="Quartier"  value={this.state.quartier} onChange={this.handleChange}/>
                                                </Col>
                                                <Col md="3">
                                                    <Input type="text" name="complement" id="complement"
                                                        placeholder="Complément"  value={this.state.complement}  onChange={this.handleChange}/>
                                                </Col>
                                                <Col md="3">
                                                <CustomInput type="select"  id="zone"
                                                             name="zone" onChange={this.handleChange}>
                                                    {this.state.zones.map(zone=>
                                                        <option  value={zone.nom} key={zone.id}>{zone.nom}</option>
                                                    )}
                                                </CustomInput>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <Button color="primary" className="mt-2 mr-2 pull-right">Créer </Button>
                                        <ToastContainer/>
                                    </Form>
                                </CardBody>
                            </Card>
            </Fragment>
        )
    }
}
