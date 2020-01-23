import React, { Component, Fragment } from 'react';
import { typeEmployeService } from '../../../services/typeEmployeService';
import '../EmployeCreate/index';
import { zoneService } from '../../../services/zoneService';
import {
  Col, Row, Card, CardBody,
  CardTitle, Button, Form, FormGroup, Label, Input, CustomInput
} from 'reactstrap';
import { employeService } from '../../../services/employeService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class EditEmploye extends Component {
  getAllZone = () => {
    return zoneService.getAllZone().then(resp => {
      const zones = resp;
      this.setState({ zones });
      this.setState({ zone: zones[0].nom })
    })
  }
  getEmployeById = id => {
    return employeService.getEmploye(id).then(resp => {
      if (resp.status === 200) {
        const employe = resp.data;
        const adresse = resp.data.adresse;
        const zone = resp.data.adresse.zone;
        this.setState({ employe });
        this.setState({ zone });
        if (adresse.complement == null) {
          adresse.complement = '';
          this.setState({ adresse });
        } else
          this.setState({ adresse });
        this.setState({ getEmploye: true });
      }
    })
  }
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.getEmployeById(id);
    const genres = typeEmployeService.genre();
    const typeEmployes = typeEmployeService.typeEmploye();
    this.getAllZone();
    this.state = {
      typeEmployes: typeEmployes,
      genres: genres,
      zones: [],
      employe: {},
      adresse: {},
      isRedirect: false,
      zone: {},
      getEmploye: false
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    return employeService.updateEmploye(this.state).then(resp => {
      if (resp && resp.status === 200) {
        toast.info(`${resp.data.prenom} ${resp.data.nom} a été modifié avec succés`, {
          ptoastosition: toast.POSITION.TOP_CENTER
      });
        this.setState({ isRedirect: true });
        this.props.history.push('/employes');
        window.location.reload(false);
      }else {
        toast.error(`une erreur est survenue coté serveur`, {
          ptoastosition: toast.POSITION.TOP_CENTER
      });
      }
    });
  }
  handleChange = e => {
    const { name, value } = e.target;
    const employe = { ...this.state.employe };
    const adresse = { ...this.state.adresse };
    const zone = { ...this.state.zone }
    if (name === "nom") {
      employe.nom = value;
      this.setState({ employe });
    }
    if (name === "numero") {
      employe.numero = value;
      this.setState({ employe });
    }
    if (name === "genre") {
      employe.genre = value;
      this.setState({ employe });
    }
    if (name === "prenom") {
      employe.prenom = value;
      this.setState({ employe });
    }
    if (name === "email") {
      employe.email = value;
      this.setState({ employe });
    }
    if (name === "typeEmploye") {
      employe.typeEmploye = value;
      this.setState({ employe });
    }
    if (name === "numeroTelephone") {
      employe.numeroTelephone = value;
      this.setState({ employe });
    }
    if (name === "ville") {
      adresse.ville = value;
      this.setState({ adresse });
    }
    if (name === "quartier") {
      adresse.quartier = value;
      this.setState({ adresse });
    }
    if (name === "complement") {
      adresse.complement = value;
      this.setState({ adresse });
    }
    if (name === "zone") {
      zone.nom = value;
      this.setState({ zone });
    }


  }
  handleAnnule=()=>{
    this.props.history.push("/employes");
}
  render() {
    return (
      <Fragment>
        {/* <AppHeader /> */}
        <Card className="main-card mb-3">
          {this.state.getEmploye &&
            <CardBody>
              <CardTitle className="heading">Editer Employé</CardTitle>
              <Form className="form" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Row>
                    <Col md="3">
                      <Label for="adresse">Numero</Label>
                    </Col>
                    <Col md="3">
                      <Label for="adresse">Nom</Label>
                    </Col>
                    <Col md="3">
                      <Label for="adresse">Prenom</Label>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={3}>
                      {/* <Label for="exampleEmail11">Email</Label> */}
                      <Input type="number" name="numero"
                        placeholder="Numero" value={this.state.employe.numero} onChange={this.handleChange} />
                    </Col>
                    <Col md={3}>
                      {/* <Label for="exampleEmail11">Email</Label> */}
                      <Input type="text" name="nom"
                        placeholder="Nom" value={this.state.employe.nom} onChange={this.handleChange} />
                    </Col>
                    <Col md={3}>
                      <Input type="text" name="prenom"
                        placeholder="Prenom" value={this.state.employe.prenom} onChange={this.handleChange} />
                    </Col>
                  </Row>
                </FormGroup>
                <Row>
                  <Col md="3">
                    <Label for="adresse">Email</Label>
                  </Col>
                  <Col md="3">
                    <Label for="adresse">Numero Telephone</Label>
                  </Col>
                  <Col md="3">
                    <Label for="adresse">Genre</Label>
                  </Col>
                  <Col md="3">
                    <Label for="adresse">Type</Label>
                  </Col>
                </Row>
                <FormGroup>
                  <Row form>
                    <Col md={3}>
                      <Input type="text" name="email"
                        placeholder="Email" value={this.state.employe.email} onChange={this.handleChange} />
                    </Col>
                    <Col md="3">
                      {/* <Label for="exampleEmail11">Email</Label> */}
                      <Input type="text" name="numeroTelephone"
                        placeholder="Numero Telephone" value={this.state.employe.numeroTelephone} onChange={this.handleChange} />
                    </Col>
                    <Col md="3">
                      <CustomInput type="select" name="genre" id="genre"
                        onChange={this.handleChange} value={this.state.employe.genre}>
                        {this.state.genres.map(g =>
                          <option key={g.id} value={g.nom} >{g.nom}</option>
                        )}
                      </CustomInput>
                    </Col>
                    <Col md="3">
                      <CustomInput type="select" placeholder="type Employe" id="typeEmploye"
                        name="typeEmploye" onChange={this.handleChange} value={this.state.employe.typeEmploye}>
                        {this.state.typeEmployes.map(type =>
                          <option value={type.nom} key={type.id}>{type.nom}</option>
                        )}
                      </CustomInput>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col md="3">
                      <Label for="adresse">Ville</Label>
                    </Col>
                    <Col md="3">
                      <Label for="adresse">Quartier</Label>
                    </Col>
                    <Col md="3">
                      <Label for="adresse">Complement</Label>
                    </Col>
                    <Col md="3">
                      <Label for="adresse">Zone</Label>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="3">
                      <Input type="text" name="ville"
                        placeholder="Ville" value={this.state.adresse.ville} onChange={this.handleChange} />
                    </Col>
                    <Col md="3">
                      <Input type="text" name="quartier"
                        placeholder="Quartier" value={this.state.adresse.quartier} onChange={this.handleChange} />
                    </Col>
                    <Col md="3">
                      <Input type="text" name="complement"
                        placeholder="Complement" value={this.state.adresse.complement} onChange={this.handleChange} />
                    </Col>
                    <Col md="3">
                      <CustomInput type="select" id="zone"
                        name="zone" onChange={this.handleChange} value={this.state.zone.nom}>
                        {this.state.zones.map(zone =>
                          <option value={zone.nom} key={zone.id} >{zone.nom}</option>
                        )}
                      </CustomInput>
                    </Col>
                  </Row>
                </FormGroup>
                <Button color="primary" className="mt-2 mr-2 pull-right"> Modifier </Button>
                <Button color="secondary" className="mt-2 mr-2 pull-right" onClick={this.handleAnnule}> Annuler </Button>
              </Form>
              <ToastContainer/>
            </CardBody>}
        </Card>
      </Fragment>)
  }
}
