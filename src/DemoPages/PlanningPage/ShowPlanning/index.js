import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { employeService } from '../../../services/employeService';
import './index.css';
import {
    faChevronLeft, faChevronRight,

} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Row, Col,
} from 'reactstrap';

export default class Planning extends Component {
    getVacationSemaine() {
        employeService.getVacationSemaine().then(result => {
            let semaines = [];
            this.setState({ semaines });
            if (result.status === 200) {
                const key = 0;
                this.setState({ key });
                const dateDebut = result.data.dateDebut;
                const dateFin = result.data.dateFin;
                const isFirstVacationOfMonth = result.data.isFirstVacationOfMonth;
                const isLastVacationOfMonth = result.data.isLastVacationOfMonth;
                this.setState({ dateDebut });
                this.setState({ dateFin });
                this.setState({ isFirstVacationOfMonth });
                this.setState({ isLastVacationOfMonth });
                let listEmployes = [];
                if (result.data.jour1) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour1;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour1H1 = result.data.jour1H1["\u0000*\u0000items"];
                    const jour1H2 = result.data.jour1H2["\u0000*\u0000items"];
                    const jour1H3 = result.data.jour1H3["\u0000*\u0000items"];
                    this.setState({ jour1H1 });
                    this.setState({ jour1H2 })
                    this.setState({ jour1H3 })
                    listEmployes = listEmployes.concat(jour1H1, jour1H2, jour1H3);
                }
                if (result.data.jour2) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour2;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour2H1 = result.data.jour2H1["\u0000*\u0000items"];
                    const jour2H2 = result.data.jour2H2["\u0000*\u0000items"];
                    const jour2H3 = result.data.jour2H3["\u0000*\u0000items"];
                    this.setState({ jour2H1 });
                    this.setState({ jour2H2 });
                    this.setState({ jour2H3 });
                    listEmployes = listEmployes.concat(jour2H1, jour2H2, jour2H3);
                }
                if (result.data.jour3) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour3;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour3H1 = result.data.jour3H1["\u0000*\u0000items"];
                    const jour3H2 = result.data.jour3H2["\u0000*\u0000items"];
                    const jour3H3 = result.data.jour3H3["\u0000*\u0000items"];
                    this.setState({ jour3H1 });
                    this.setState({ jour3H2 });
                    this.setState({ jour3H3 });
                    listEmployes = listEmployes.concat(jour3H1, jour3H2, jour3H3);
                }

                if (result.data.jour4) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour4;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour4H1 = result.data.jour4H1["\u0000*\u0000items"];
                    const jour4H2 = result.data.jour4H2["\u0000*\u0000items"];
                    const jour4H3 = result.data.jour4H3["\u0000*\u0000items"];
                    this.setState({ jour4H1 });
                    this.setState({ jour4H2 });
                    this.setState({ jour4H3 });
                    listEmployes = listEmployes.concat(jour4H1, jour4H2, jour4H3);
                }

                if (result.data.jour5) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour5;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour5H1 = result.data.jour5H1["\u0000*\u0000items"];
                    const jour5H2 = result.data.jour5H2["\u0000*\u0000items"];
                    const jour5H3 = result.data.jour5H3["\u0000*\u0000items"];
                    this.setState({ jour5H1 });
                    this.setState({ jour5H2 });
                    this.setState({ jour5H3 });
                    listEmployes = listEmployes.concat(jour5H1, jour5H2, jour5H3);
                }

                if (result.data.jour6) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour6;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour6H1 = result.data.jour6H1["\u0000*\u0000items"];
                    const jour6H2 = result.data.jour6H2["\u0000*\u0000items"];
                    const jour6H3 = result.data.jour6H3["\u0000*\u0000items"];
                    this.setState({ jour6H1 });
                    this.setState({ jour6H2 });
                    this.setState({ jour6H3 });
                    listEmployes = listEmployes.concat(jour6H1, jour6H2, jour6H3);
                }

                if (result.data.jour7) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour7;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour7H1 = result.data.jour7H1["\u0000*\u0000items"];
                    const jour7H2 = result.data.jour7H2["\u0000*\u0000items"];
                    const jour7H3 = result.data.jour7H3["\u0000*\u0000items"];
                    this.setState({ jour7H1 });
                    this.setState({ jour7H2 });
                    this.setState({ jour7H3 });
                    listEmployes = listEmployes.concat(jour7H1, jour7H2, jour7H3);
                }

                this.setState({ semaines });
                const listCommis = listEmployes.filter((employe, index) => employe.typeEmploye === "Commis Cuisine" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listSups = listEmployes.filter((employe, index) => employe.typeEmploye === "Superviseur" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listCoordonnateur = listEmployes.filter((employe, index) => employe.typeEmploye === "Coordonnateur Cuisine" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listBarman = listEmployes.filter((employe, index) => employe.typeEmploye === "Barman" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listHotesse = listEmployes.filter((employe, index) => employe.typeEmploye === "Hotesse" && index === listEmployes.findIndex(emp => emp.id === employe.id))
                this.setState({ listCommis });
                this.setState({ listSups });
                this.setState({ listCoordonnateur });
                this.setState({ listBarman });
                this.setState({ listHotesse });
                this.setState({ listEmployes })
            }
        });
    }
    getVacationSemainePrecedente = () => {
        employeService.getVacationSemainePrecedente(this.state.dateDebut).then(result => {
            let semaines = [];
            console.log("date debut", this.state.dateDebut);
            this.setState({ semaines });
            if (result.status === 200) {
                const key = 0;
                this.setState({ key });
                console.log("result", result.data)
                const dateDebut = result.data.dateDebut;
                const dateFin = result.data.dateFin;
                const isFirstVacationOfMonth = result.data.isFirstVacationOfMonth;
                const isLastVacationOfMonth = result.data.isLastVacationOfMonth;
                this.setState({ dateDebut });
                this.setState({ dateFin });
                this.setState({ isFirstVacationOfMonth });
                this.setState({ isLastVacationOfMonth });
                let listEmployes = [];
                if (result.data.jour1) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour1;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour1H1 = result.data.jour1H1["\u0000*\u0000items"];
                    const jour1H2 = result.data.jour1H2["\u0000*\u0000items"];
                    const jour1H3 = result.data.jour1H3["\u0000*\u0000items"];
                    this.setState({ jour1H1 });
                    this.setState({ jour1H2 })
                    this.setState({ jour1H3 })
                    listEmployes = listEmployes.concat(jour1H1, jour1H2, jour1H3);

                }
                if (result.data.jour2) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour2;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour2H1 = result.data.jour2H1["\u0000*\u0000items"];
                    const jour2H2 = result.data.jour2H2["\u0000*\u0000items"];
                    const jour2H3 = result.data.jour2H3["\u0000*\u0000items"];
                    this.setState({ jour2H1 });
                    this.setState({ jour2H2 });
                    this.setState({ jour2H3 });
                    console.log("jour 2 H1", this.state.jour2H1)
                }
                if (result.data.jour3) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour3;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour3H1 = result.data.jour3H1["\u0000*\u0000items"];
                    const jour3H2 = result.data.jour3H2["\u0000*\u0000items"];
                    const jour3H3 = result.data.jour3H3["\u0000*\u0000items"];
                    this.setState({ jour3H1 });
                    this.setState({ jour3H2 });
                    this.setState({ jour3H3 });
                    listEmployes = listEmployes.concat(jour3H1, jour3H2, jour3H3);
                }

                if (result.data.jour4) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour4;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour4H1 = result.data.jour4H1["\u0000*\u0000items"];
                    const jour4H2 = result.data.jour4H2["\u0000*\u0000items"];
                    const jour4H3 = result.data.jour4H3["\u0000*\u0000items"];
                    this.setState({ jour4H1 });
                    this.setState({ jour4H2 });
                    this.setState({ jour4H3 });
                    listEmployes = listEmployes.concat(jour4H1, jour4H2, jour4H3);
                }

                if (result.data.jour5) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour5;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour5H1 = result.data.jour5H1["\u0000*\u0000items"];
                    const jour5H2 = result.data.jour5H2["\u0000*\u0000items"];
                    const jour5H3 = result.data.jour5H3["\u0000*\u0000items"];
                    this.setState({ jour5H1 });
                    this.setState({ jour5H2 });
                    this.setState({ jour5H3 });
                    listEmployes = listEmployes.concat(jour5H1, jour5H2, jour5H3);
                }

                if (result.data.jour6) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour6;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour6H1 = result.data.jour6H1["\u0000*\u0000items"];
                    const jour6H2 = result.data.jour6H2["\u0000*\u0000items"];
                    const jour6H3 = result.data.jour6H3["\u0000*\u0000items"];
                    this.setState({ jour6H1 });
                    this.setState({ jour6H2 });
                    this.setState({ jour6H3 });
                    listEmployes = listEmployes.concat(jour6H1, jour6H2, jour6H3);
                }

                if (result.data.jour7) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour7;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour7H1 = result.data.jour7H1["\u0000*\u0000items"];
                    const jour7H2 = result.data.jour7H2["\u0000*\u0000items"];
                    const jour7H3 = result.data.jour7H3["\u0000*\u0000items"];
                    this.setState({ jour7H1 });
                    this.setState({ jour7H2 });
                    this.setState({ jour7H3 });
                    listEmployes = listEmployes.concat(jour7H1, jour7H2, jour7H3);
                }

                this.setState({ semaines });
                const listCommis = listEmployes.filter((employe, index) => employe.typeEmploye === "Commis Cuisine" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listSups = listEmployes.filter((employe, index) => employe.typeEmploye === "Superviseur" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listCoordonnateur = listEmployes.filter((employe, index) => employe.typeEmploye === "Coordonnateur Cuisine" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listBarman = listEmployes.filter((employe, index) => employe.typeEmploye === "Barman" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listHotesse = listEmployes.filter((employe, index) => employe.typeEmploye === "Hotesse" && index === listEmployes.findIndex(emp => emp.id === employe.id))
                this.setState({ listCommis });
                this.setState({ listSups });
                this.setState({ listCoordonnateur });
                this.setState({ listBarman });
                this.setState({ listHotesse });
                this.setState({ listEmployes })

            }
        });
    }

    getVacationSemaineSuivante = () => {
        employeService.getVacationSemaineSuivante(this.state.dateFin).then(result => {
            let semaines = [];
            console.log("date debut", this.state.dateDebut);
            this.setState({ semaines });
            if (result.status === 200) {
                const key = 0;
                this.setState({ key });
                console.log("result", result.data)
                const dateDebut = result.data.dateDebut;
                const dateFin = result.data.dateFin;
                const isFirstVacationOfMonth = result.data.isFirstVacationOfMonth;
                const isLastVacationOfMonth = result.data.isLastVacationOfMonth;
                this.setState({ dateDebut });
                this.setState({ dateFin });
                this.setState({ isFirstVacationOfMonth });
                this.setState({ isLastVacationOfMonth });
                let listEmployes = [];
                if (result.data.jour1) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour1;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour1H1 = result.data.jour1H1["\u0000*\u0000items"];
                    const jour1H2 = result.data.jour1H2["\u0000*\u0000items"];
                    const jour1H3 = result.data.jour1H3["\u0000*\u0000items"];
                    this.setState({ jour1H1 });
                    this.setState({ jour1H2 })
                    this.setState({ jour1H3 })
                    listEmployes = listEmployes.concat(jour1H1, jour1H2, jour1H3);

                }
                if (result.data.jour2) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour2;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour2H1 = result.data.jour2H1["\u0000*\u0000items"];
                    const jour2H2 = result.data.jour2H2["\u0000*\u0000items"];
                    const jour2H3 = result.data.jour2H3["\u0000*\u0000items"];
                    this.setState({ jour2H1 });
                    this.setState({ jour2H2 });
                    this.setState({ jour2H3 });
                    listEmployes = listEmployes.concat(jour2H1, jour2H2, jour2H3);
                }
                if (result.data.jour3) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour3;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour3H1 = result.data.jour3H1["\u0000*\u0000items"];
                    const jour3H2 = result.data.jour3H2["\u0000*\u0000items"];
                    const jour3H3 = result.data.jour3H3["\u0000*\u0000items"];
                    this.setState({ jour3H1 });
                    this.setState({ jour3H2 });
                    this.setState({ jour3H3 });
                    listEmployes = listEmployes.concat(jour3H1, jour3H2, jour3H3);
                }

                if (result.data.jour4) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour4;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour4H1 = result.data.jour4H1["\u0000*\u0000items"];
                    const jour4H2 = result.data.jour4H2["\u0000*\u0000items"];
                    const jour4H3 = result.data.jour4H3["\u0000*\u0000items"];
                    this.setState({ jour4H1 });
                    this.setState({ jour4H2 });
                    this.setState({ jour4H3 });
                    listEmployes = listEmployes.concat(jour4H1, jour4H2, jour4H3);
                }

                if (result.data.jour5) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour5;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour5H1 = result.data.jour5H1["\u0000*\u0000items"];
                    const jour5H2 = result.data.jour5H2["\u0000*\u0000items"];
                    const jour5H3 = result.data.jour5H3["\u0000*\u0000items"];
                    this.setState({ jour5H1 });
                    this.setState({ jour5H2 });
                    this.setState({ jour5H3 });
                    listEmployes = listEmployes.concat(jour5H1, jour5H2, jour5H3);
                }

                if (result.data.jour6) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour6;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour6H1 = result.data.jour6H1["\u0000*\u0000items"];
                    const jour6H2 = result.data.jour6H2["\u0000*\u0000items"];
                    const jour6H3 = result.data.jour6H3["\u0000*\u0000items"];
                    this.setState({ jour6H1 });
                    this.setState({ jour6H2 });
                    this.setState({ jour6H3 });
                    listEmployes = listEmployes.concat(jour6H1, jour6H2, jour6H3);
                }

                if (result.data.jour7) {
                    const jour = {
                        jour: Date,
                        key: Number
                    }
                    jour.jour = result.data.jour7;
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour7H1 = result.data.jour7H1["\u0000*\u0000items"];
                    const jour7H2 = result.data.jour7H2["\u0000*\u0000items"];
                    const jour7H3 = result.data.jour7H3["\u0000*\u0000items"];
                    this.setState({ jour7H1 });
                    this.setState({ jour7H2 });
                    this.setState({ jour7H3 });
                    listEmployes = listEmployes.concat(jour7H1, jour7H2, jour7H3);
                }

                this.setState({ semaines });
                const listCommis = listEmployes.filter((employe, index) => employe.typeEmploye === "Commis Cuisine" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listSups = listEmployes.filter((employe, index) => employe.typeEmploye === "Superviseur" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listCoordonnateur = listEmployes.filter((employe, index) => employe.typeEmploye === "Coordonnateur Cuisine" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listBarman = listEmployes.filter((employe, index) => employe.typeEmploye === "Barman" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                const listHotesse = listEmployes.filter((employe, index) => employe.typeEmploye === "Hotesse" && index === listEmployes.findIndex(emp => emp.id === employe.id))
                this.setState({ listCommis });
                this.setState({ listSups });
                this.setState({ listCoordonnateur });
                this.setState({ listBarman });
                this.setState({ listHotesse });
                this.setState( { listEmployes})

            }
        });
    }

    constructor(props) {

        super(props);
        this.getVacationSemaine();
        this.state = {
            semaines: [],
            dateDebut: '',
            dateFin: '',
            key: 0,
            jour1H1: [],
            jour1H2: [],
            jour1H3: [],
            jour2H1: [],
            jour2H2: [],
            jour2H3: [],
            jour3H1: [],
            jour3H2: [],
            jour3H3: [],
            jour4H1: [],
            jour4H2: [],
            jour4H3: [],
            jour5H1: [],
            jour5H2: [],
            jour5H3: [],
            jour6H1: [],
            jour6H2: [],
            jour6H3: [],
            jour7H1: [],
            jour7H2: [],
            jour7H3: [],
            isLastVacationOfMonth: false,
            isFirstVacationOfMonth: false,
            listCommis: [],
            listBarman: [],
            listSups: [],
            listCoordonnateur: [],
            listHotesse: [],
            listEmployes: [],

        }
    }
    render() {
        return (
            <div>
                <Row>
                    <Col md="11">
                        <div >
                            <i>
                                <b>
                                    Planning du  {this.state.dateDebut} au {this.state.dateFin}
                                </b>
                            </i>
                        </div>
                    </Col>
                    <Col md="1">
                        <div>
                            {!this.state.isFirstVacationOfMonth &&
                                <button className="btn btn-info" onClick={this.getVacationSemainePrecedente}>
                                    <i ><FontAwesomeIcon icon={faChevronLeft} /></i>
                                </button>}
                            {!this.state.isLastVacationOfMonth &&
                                <button className="btn btn-info" onClick={this.getVacationSemaineSuivante}>
                                    <i ><FontAwesomeIcon icon={faChevronRight} /></i>
                                </button>}
                        </div>
                    </Col>
                </Row>
                <Table bordered className="planning">

                    <thead>
                        <tr>
                            <th></th>
                            {this.state.semaines.map(jour => (
                                <th key={jour.key}>{jour.jour}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="horaire">08h00-16h00</th>
                            {this.state.semaines.map(jour => (
                                <td key={jour.key}>
                                    {jour.key === 1 && this.state.jour1H1.length > 0 &&
                                        this.state.jour1H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                    {jour.key === 2 && this.state.jour2H1.length > 0 &&
                                        this.state.jour2H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 3 && this.state.jour3H1.length > 0 &&
                                        this.state.jour3H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 4 && this.state.jour4H1.length > 0 &&
                                        this.state.jour4H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" && 
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 5 && this.state.jour5H1.length > 0 &&
                                        this.state.jour5H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 6 && this.state.jour6H1.length > 0 &&
                                        this.state.jour6H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                     <div className="barman zoneA"> {employe.numero} { employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 7 && this.state.jour7H1.length > 0 &&
                                        this.state.jour7H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                </td>

                            ))}
                        </tr>
                        <tr>
                            <th scope="row" className="horaire">16h00-00h00</th>
                            {this.state.semaines.map(jour => (
                                <td key={jour.key}>
                                    {jour.key === 1 && this.state.jour1H2.length > 0 &&
                                        this.state.jour1H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                    {jour.key === 2 && this.state.jour2H2.length > 0 &&
                                        this.state.jour2H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 3 && this.state.jour3H2.length > 0 &&
                                        this.state.jour3H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 4 && this.state.jour4H2.length > 0 &&
                                        this.state.jour4H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 5 && this.state.jour5H2.length > 0 &&
                                        this.state.jour5H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 6 && this.state.jour6H2.length > 0 &&
                                        this.state.jour6H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 7 && this.state.jour7H2.length > 0 &&
                                        this.state.jour7H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                </td>

                            ))}
                        </tr>
                        <tr>
                            <th scope="row" className="horaire">00h00-08h00</th>
                            {this.state.semaines.map(jour => (
                                <td key={jour.key}>
                                    {jour.key === 1 && this.state.jour1H3.length > 0 &&
                                        this.state.jour1H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                    {jour.key === 2 && this.state.jour2H3.length > 0 &&
                                        this.state.jour2H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 3 && this.state.jour3H3.length > 0 &&
                                        this.state.jour3H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 4 && this.state.jour4H3.length > 0 &&
                                        this.state.jour4H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 5 && this.state.jour5H3.length > 0 &&
                                        this.state.jour5H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 6 && this.state.jour6H3.length > 0 &&
                                        this.state.jour6H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 7 && this.state.jour7H3.length > 0 &&
                                        this.state.jour7H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon">{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon"> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                </td>

                            ))}
                        </tr>
                    </tbody>
                </Table>
                {this.state.listEmployes.length > 0 && 
                <div className="diagramme">
                    <Row >
                        <Col md="3">
                            <Table bordered >
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>NOM</th>
                                        <th>PRENOM</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {this.state.listCommis.map(commis => (
                                        <tr key={commis.id}>
                                            <td>{commis.numero}</td>
                                            <td>{commis.nom}</td>
                                            <td>{commis.prenom}</td>
                                        </tr>
                                      ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col md="3">
                            <Table bordered >
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>NOM</th>
                                        <th>PRENOM</th>
                                    </tr>

                                </thead>
                                <tbody>
                                {this.state.listBarman.map(b => (
                                        <tr key={b.id}>
                                            <td>{b.numero}</td>
                                            <td>{b.nom}</td>
                                            <td>{b.prenom}</td>
                                        </tr>
                                      ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col md="3">
                            <Table bordered >
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>NOM</th>
                                        <th>PRENOM</th>
                                    </tr>

                                </thead>
                                <tbody>
                                {this.state.listCoordonnateur.map(c => (
                                        <tr key={c.id}>
                                            <td>{c.numero}</td>
                                            <td>{c.nom}</td>
                                            <td>{c.prenom}</td>
                                        </tr>
                                      ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col md="3">
                            <Table bordered >
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>NOM</th>
                                        <th>PRENOM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.listHotesse.map(h => (
                                        <tr key={h.id}>
                                            <td>{h.numero}</td>
                                            <td>{h.nom}</td>
                                            <td>{h.prenom}</td>
                                        </tr>
                                      ))}
                                </tbody>
                            </Table>
                        </Col>

                    </Row>
                </div>}

            </div>


        );
    }

}
