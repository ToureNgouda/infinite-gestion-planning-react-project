import React, { Component, Fragment } from 'react';
import './index.css';
import {
    Col, Row, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Input, CustomInput
} from 'reactstrap';
import { profilService } from '../../../services/profilService';
import { userService } from '../../../services/userService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import { Container } from './styles';

export default class EditUser extends Component {
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
        console.log("props", this.props);
        this.getAllProfil();
        const id = this.props.match.params.id;
        this.getUser(id);
        this.state = {
            profils: [],
            isRedirect: false,
            user: {},
            userMount: false
        }
    }
    getUser(id) {
        userService.getUser(id).then(result => {
            if (result && result.status === 200) {
                const user = result.data
                this.setState({ user });
                this.setState({ userMount: true });
                console.log("user recupere ", this.state.user);

            }
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("state", this.state);
        userService.updateUser(this.state).then(result => {
            if (result && result.status === 200) {
                console.log(result.data);
                this.props.history.push("/utilisateurs");
                window.location.reload(false);
            }
        })
    }
    handleAnnule=()=>{
        this.props.history.push("/utilisateurs");
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
                <Card className="main-card mb-3 editUser">
                    {this.state.userMount &&
                        <CardBody>
                            <CardTitle className="heading">Modifier User</CardTitle>
                            <Form className="form" onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            {/* <Label for="exampleEmail11">Email</Label> */}
                                            <Input type="text" name="nom"
                                                placeholder="Nom" value={this.state.user.nom} onChange={this.handleChange} />
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
                                            <Input type="text" name="email"
                                                placeholder="Email" value={this.state.user.email} onChange={this.handleChange} />
                                        </Col>
                                        <Col md="6">
                                            <CustomInput type="select" name="profil" id="profil"
                                                onChange={this.handleChange} value={this.state.user.profil}>
                                                {this.state.profils.map(profil =>
                                                    <option key={profil.id} value={profil.typeProfil} >{profil.typeProfil}</option>
                                                )}
                                            </CustomInput>
                                        </Col>

                                    </Row>
                                </FormGroup>
                                <Button color="primary" className="mt-2 mr-2 pull-right" type="submit"> Modifier </Button>
                                <Button color="secondary" className="mt-2 mr-2 pull-right" onClick={this.handleAnnule}> Annuler </Button>
                                <ToastContainer />
                            </Form>
                        </CardBody>}
                </Card>
            </Fragment>
        )
    }
}
