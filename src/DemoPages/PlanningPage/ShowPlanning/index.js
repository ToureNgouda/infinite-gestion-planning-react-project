import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { employeService } from '../../../services/employeService';
import './index.css';
import { typeEmployeService } from '../../../services/typeEmployeService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap-spinner'
import { planningService } from '../../../services/planningService';



import {
    faChevronLeft, faChevronRight,

} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Row, Col, Label, Button, CustomInput, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default class Planning extends Component {
    getVacationSemaine() {
        employeService.getVacationSemaine().then(result => {
            let semaines = [];
            this.setState({ semaines });
            console.log("gest vacatons semaines",result)
            if (result && result.status === 200) {
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
                    console.log("result", result.data)
                    jour.key = this.state.key + 1;
                    this.setState({ key: jour.key })
                    semaines.push(jour);
                    const jour1H1 = result.data.jour1H1["\u0000*\u0000items"];
                    const jour1H2 = result.data.jour1H2["\u0000*\u0000items"];
                    const jour1H3 = result.data.jour1H3["\u0000*\u0000items"];
                    this.setState({ jour1H1 });
                    this.setState({ jour1H2 });
                    this.setState({ jour1H3 });
                    this.setState({ jour1Date: result.data.jour1 });
                    this.setState({ tranche1: this.state.horaires[0] });
                    this.setState({ tranche2: this.state.horaires[1] });
                    this.setState({ tranche3: this.state.horaires[2] });
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
                    this.setState({ jour2Date: result.data.jour2 });
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
                    this.setState({ jour3Date: result.data.jour3 });
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
                    this.setState({ jour4Date: result.data.jour4 });
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
                    this.setState({ jour5Date: result.data.jour5 });
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
                    this.setState({ jour6Date: result.data.jour6 });
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
                    this.setState({ jour7Date: result.data.jour7 });
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
            }
        });
    }
    getVacationSemainePrecedente = () => {
        employeService.getVacationSemainePrecedente(this.state.dateDebut).then(result => {
            let semaines = [];
            console.log("date debut", this.state.dateDebut);
            this.setState({ semaines });
            if (result && result.status === 200) {
                console.log("result", result.data);
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
                    this.setState({ jour1H2 });
                    this.setState({ jour1H3 });
                    this.setState({ jour1Date: result.data.jour1 });
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
                    this.setState({ jour2Date: result.data.jour2 });
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
                    this.setState({ jour3Date: result.data.jour3 });
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
                    this.setState({ jour4Date: result.data.jour4 });
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
                    this.setState({ jour5Date: result.data.jour5 });
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
                    this.setState({ jour6Date: result.data.jour6 });
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
                    this.setState({ jour7Date: result.data.jour7 });
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

            }
        });
    }

    getVacationSemaineSuivante = () => {
        employeService.getVacationSemaineSuivante(this.state.dateFin).then(result => {
            let semaines = [];
            console.log("date debut", this.state.dateDebut);
            this.setState({ semaines });
            if (result && result.status === 200) {
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
                    this.setState({ jour1H2 });
                    this.setState({ jour1H3 });
                    this.setState({ jour1Date: result.data.jour1 });
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
                    this.setState({ jour2Date: result.data.jour2 });
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
                    this.setState({ jour3Date: result.data.jour3 });
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
                    this.setState({ jour4Date: result.data.jour4 });
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
                    let jour5H1 = result.data.jour5H1["\u0000*\u0000items"];
                    let jour5H2 = result.data.jour5H2["\u0000*\u0000items"];
                    let jour5H3 = result.data.jour5H3["\u0000*\u0000items"];
                    jour5H1 = jour5H1.sort();
                    this.setState({ jour5H1 });
                    this.setState({ jour5H2 });
                    this.setState({ jour5H3 });
                    this.setState({ jour5Date: result.data.jour5 });
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
                    this.setState({ jour6Date: result.data.jour6 });
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
                    let jour7H1 = result.data.jour7H1["\u0000*\u0000items"];
                    let jour7H2 = result.data.jour7H2["\u0000*\u0000items"];
                    let jour7H3 = result.data.jour7H3["\u0000*\u0000items"];
                    this.setState({ jour7H1 });
                    this.setState({ jour7H2 });
                    this.setState({ jour7H3 });
                    this.setState({ jour7Date: result.data.jour7 });
                    listEmployes = listEmployes.concat(jour7H1, jour7H2, jour7H3);
                }

                this.setState({ semaines });
                // const listCommis = listEmployes.filter((employe, index) => employe.typeEmploye === "Commis Cuisine" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                // const listSups = listEmployes.filter((employe, index) => employe.typeEmploye === "Superviseur" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                // const listCoordonnateur = listEmployes.filter((employe, index) => employe.typeEmploye === "Coordonnateur Cuisine" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                // const listBarman = listEmployes.filter((employe, index) => employe.typeEmploye === "Barman" && index === listEmployes.findIndex(emp => emp.id === employe.id));
                // const listHotesse = listEmployes.filter((employe, index) => employe.typeEmploye === "Hotesse" && index === listEmployes.findIndex(emp => emp.id === employe.id))
                // this.setState({ listCommis });
                // this.setState({ listSups });
                // this.setState({ listCoordonnateur });
                // this.setState({ listBarman });
                // this.setState({ listHotesse });

            }
        });
    }
    getListEmployes() {
        employeService.getAllEmployes().then(result => {
            if (result && result.status === 200) {
                this.setState({ listEmployes: result.data });
                this.setState({ idEmploye: this.state.listEmployes[0].id });
                this.setState({ employe: this.state.listEmployes[0] });
            }
        });
    };
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        if (name === "idEmploye") {
            employeService.getEmploye(value).then(result => {
                if (result.status === 200) {
                    const employe = result.data;
                    this.setState({ employe });
                };
            });
        }
    }
    handleChangeDate = date => {
        this.setState({ date });
    }
    handleSubmit = () => {
        console.log("state", this.state.date);
        console.log("id employe", this.state.idEmploye);
        console.log("tranche horaire", this.state.idTranche)
        employeService.ajouterEmployeToVacation(this.state).then(result => {
            console.log("result", result);
            if (result && result.status === 200) {
                const date = result.data.date;
                let dateDebut = '';
                let dateFin = '';
                if (result.data.tranche_horaire_id === 1) {
                    dateDebut = "08h";
                    dateFin = "16h"
                } else if (result.data.tranche_horaire_id === 2) {
                    dateDebut = "16h";
                    dateFin = "00h"
                } else {
                    dateDebut = "00h";
                    dateFin = "08h"
                }
                this.getVacationSemaine();
                toast.success(`${this.state.employe.prenom} ${this.state.employe.nom} a été ajouté avec succés à la vacation du ${date} de ${dateDebut} à ${dateFin}`, {
                    position: toast.POSITION.TOP_CENTER
                });
                this.setState({ date: new Date() });
            } else {
                toast.error(`une erreur est survenue coté serveur veuillez réessayer svp  `, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }
    getAllTranchsHoraires() {
        typeEmployeService.getHoraire().then(result => {
            console.log("result", result)
            if (result && result.status === 200) {
                const horaires = result.data;
                this.setState({ horaires });
                this.setState({ idTranche: horaires[0].id });
            }
        });
    }
    handleDelete = (employe, tranche, date) => {
        console.log("fonction appele", employe)
        this.setState({ modalIsOpen: true });
        this.setState({ idEmploye: employe.id });
        this.setState({ employe });
        this.setState({ idTranche: tranche.id });
        this.setState({ dateVacation: date });
        this.setState({ tranche });

    }
    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }
    handleDeleteSubmit = () => {
        console.log("state", this.state.dateVacation);
        console.log("id employe", this.state.idEmploye);
        console.log("tranche horaire", this.state.idTranche)
        employeService.supprimerEmployeToVacation(this.state).then(result => {
            this.setState({ modalIsOpen: false });
            if (result && result.status === 200) {
                const date = result.data.date;
                this.getVacationSemaine();
                toast.success(`${this.state.employe.prenom} ${this.state.employe.nom} a été supprimé avec succés de la vacation du ${date} de ${this.state.tranche.heureDebut}-${this.state.tranche.heureFin}`, {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                toast.error(`une erreur est survenue coté serveur veuillez réessayer svp  `, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })

    }

    constructor(props) {
        super(props);
        this.getVacationSemaine();
        this.getListEmployes();
        this.getAllTranchsHoraires();
        this.verifierPlanningIsGenerate();
        this.state = {
            date: new Date(),
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
            jour1Date: '',
            jour2Date: '',
            jour3Date: '',
            jour4Date: '',
            jour5Date: '',
            jour6Date: '',
            jour7Date: '',
            tranche1: '',
            tranche2: '',
            tranche3: '',
            isLastVacationOfMonth: false,
            isFirstVacationOfMonth: false,
            listCommis: [],
            listBarman: [],
            listSups: [],
            listCoordonnateur: [],
            listHotesse: [],
            listEmployes: [],
            horaires: [],
            idTranche: '',
            idEmploye: '',
            modalIsOpen: false,
            dateVacation: '',
            employe: {},
            tranche: {},
            isLoading: false,
            planningIsgenerate: false,
            day:0
        }
    }
    verifierPlanningIsGenerate(){
        planningService.verifieGenerationPlanning().then(result=>{
              if(result && result.status ===200){
                  this.setState({ planningIsgenerate: result.data.planningIsgenerate});
                  this.setState({ day: result.data.day});
                  console.log("daye",result.data.day)
              }
        })
    }
    genererPlanningMoisProchain = () => {
        this.setState({ isLoading: true });
        planningService.genererPlanningMoisProchain().then(result =>{
            if(result && result.status === 200){
                this.setState({ isLoading: false});
            }
        })
    }
    regenererPlanningMoisProchain= ()=>{
        this.setState({ isLoading: true});
       planningService.regenererPlanningMoisProchain().then(result =>{
        if(result && result.status === 200){
            this.setState({ isLoading: false});
        }
       })
    }
    regenererPlanningMoisEnCours=()=>{
        this.setState({ isLoading: true});
        employeService.regenererPlanningMoisEnCours().then(result=>{
            if(result && result.status === 200){
                this.setState({ isLoading: false});
               
            }
        })
    }
    render() {
        return (
            <div className="showPlanning">
                <Modal isOpen={this.state.modalIsOpen} toggle={this.closeModal}>
                    <ModalHeader toggle={this.closeModal}>Supprimer un employé à une vacation</ModalHeader>
                    <ModalBody>
                        Etes vous  sûr de vouloir supprimer <b> {this.state.employe.prenom} {this.state.employe.nom} </b><br /> de la vacation du <b>{this.state.dateVacation} </b> de {this.state.tranche.heureDebut}-{this.state.tranche.heureFin}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.closeModal}>Annuler</Button>{' '}
                        <Button color="primary" onClick={this.handleDeleteSubmit}>Confirmer</Button>
                    </ModalFooter>
                </Modal>
                {this.state.isLoading &&
                    <div>
                        <Spinner animation="border" variant="light" />

                    </div>}
                <Row>
                    <Col md="5">
                        <div className="generer">
                            {!this.state.planningIsgenerate && this.state.day >=20 && 
                                <Button color="info" onClick={this.genererPlanningMoisProchain}>Generer planning mois prochain</Button>

                            }
                            {this.state.planningIsgenerate &&
                                <Button color="info" onClick={this.regenererPlanningMoisProchain}>Regenerer planning mois prochain</Button>

                            }
                            {!this.state.planningIsgenerate && this.state.day < 20 && 
                                <Button color="info" onClick={this.regenererPlanningMoisEnCours}>Regenerer planning mois en cours</Button>

                            }
                        </div>

                    </Col>
                    <Col md="4">
                        <div className="titre">
                            <i>
                                <b>
                                    Planning du  {this.state.dateDebut} au {this.state.dateFin}
                                </b>
                            </i>
                        </div>
                    </Col>
                    <Col md="3" >
                        <div className="moisProchainPred">
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
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                    {jour.key === 2 && this.state.jour2H1.length > 0 &&
                                        this.state.jour2H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 3 && this.state.jour3H1.length > 0 &&
                                        this.state.jour3H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 4 && this.state.jour4H1.length > 0 &&
                                        this.state.jour4H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 5 && this.state.jour5H1.length > 0 &&
                                        this.state.jour5H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)} >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 6 && this.state.jour6H1.length > 0 &&
                                        this.state.jour6H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 7 && this.state.jour7H1.length > 0 &&
                                        this.state.jour7H1.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)} >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche1, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
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
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                    {jour.key === 2 && this.state.jour2H2.length > 0 &&
                                        this.state.jour2H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 3 && this.state.jour3H2.length > 0 &&
                                        this.state.jour3H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 4 && this.state.jour4H2.length > 0 &&
                                        this.state.jour4H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 5 && this.state.jour5H2.length > 0 &&
                                        this.state.jour5H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 6 && this.state.jour6H2.length > 0 &&
                                        this.state.jour6H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 7 && this.state.jour7H2.length > 0 &&
                                        this.state.jour7H2.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche2, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
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
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour1Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                    {jour.key === 2 && this.state.jour2H3.length > 0 &&
                                        this.state.jour2H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)} >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour2Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 3 && this.state.jour3H3.length > 0 &&
                                        this.state.jour3H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)} >{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour3Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 4 && this.state.jour4H3.length > 0 &&
                                        this.state.jour4H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour4Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 5 && this.state.jour5H3.length > 0 &&
                                        this.state.jour5H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour5Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 6 && this.state.jour6H3.length > 0 &&
                                        this.state.jour6H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)} > {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour6Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }
                                    {jour.key === 7 && this.state.jour7H3.length > 0 &&
                                        this.state.jour7H3.map(employe => (
                                            <div key={employe.id}>
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneA" &&
                                                    <div className="superviseur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && employe.zone === "ZoneB" &&
                                                    <div className="superviseur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Superviseur" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="superviseur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneA" &&
                                                    <div className="hotesse zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && employe.zone === "ZoneB" &&
                                                    <div className="hotesse zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Hotesse" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="hotesse zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneA" &&
                                                    <div className="barman zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && employe.zone === "ZoneB" &&
                                                    <div className="barman zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Barman" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="barman zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}> {employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="commis zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="commis zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Commis Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="commis zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneA" &&
                                                    <div className="coordonnateur zoneA" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && employe.zone === "ZoneB" &&
                                                    <div className="coordonnateur zoneB" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                                {employe.typeEmploye === "Coordonnateur Cuisine" && (employe.zone === "ZoneC" || employe.zone === "ZoneD") &&
                                                    <div className="coordonnateur zoneTampon" onClick={() => this.handleDelete(employe, this.state.tranche3, this.state.jour7Date)}>{employe.numero} {employe.prenom.charAt(0)}. {employe.nom}</div>}
                                            </div>

                                        ))
                                    }

                                </td>

                            ))}
                        </tr>
                    </tbody>
                </Table>
                {
                    this.state.listEmployes.length > 0 &&
                    <div className="diagramme">
                        {/* <Row >
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
                        </Col> */}
                        <Row >
                            <Col md="12">
                                <Label> <b>Ajouter un employé à une vacation</b></Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <CustomInput type="select" name="idEmploye" id="idEmploye"
                                    onChange={this.handleChange}>
                                    {this.state.listEmployes.map(e =>
                                        <option value={e.id} key={e.id} >{e.numero} {e.nom} {e.prenom}</option>
                                    )}
                                </CustomInput>
                            </Col>
                            <Col md="3">
                                {/* <Input placeholder="Date" onKeyDown={this.showDate} /> */}
                                <DatePicker placeholderText="Date"
                                    popperPlacement="botom-start"
                                    selected={this.state.date}
                                    onChange={this.handleChangeDate}
                                    className="date" />
                            </Col>
                            <Col md="3">
                                <CustomInput type="select" name="idTranche" id="idTranche"
                                    onChange={this.handleChange}>
                                    {this.state.horaires.map(t =>
                                        <option value={t.id} key={t.id}>{t.heureDebut}-{t.heureFin}</option>
                                    )}
                                </CustomInput>
                            </Col>
                            <Col md="3">
                                <Button onClick={this.handleSubmit} className="btn btn-default btn-lg btn-block"><b>Valider</b></Button>
                                <ToastContainer />
                            </Col>
                        </Row>
                        <div className="diagramme">
                            <Row>
                                <Col md="12">
                                    <Label><b>Diagramme</b></Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1">
                                    <div className="superviseurD"> </div>
                                    <div className="barmanD"></div>
                                    <div className="coordonnateurD"></div>
                                    <div className="commisD"> </div>
                                    <div className="hotesseD"></div>
                                </Col>
                                <Col md="3">
                                    <div className="nomZone" > Superviseur</div>
                                    <div className="nomZone">Barman</div>
                                    <div className="nomZone">Coordonnateur Cuisine</div>
                                    <div className="nomZone">Commis Cuisine</div>
                                    <div className="nomZone">Hotesse</div>
                                </Col>

                                <Col md="1">
                                    <div className="zoneAD"> </div>
                                    <div className="zoneBD"></div>
                                    <div className="zoneTamponD"></div>
                                </Col>
                                <Col md="3">
                                    <div className="nomZone" > Zone A</div>
                                    <div className="nomZone">Zone B</div>
                                    <div className="nomZone">Zone Tampon</div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                }
            </div >
        );
    }
}
