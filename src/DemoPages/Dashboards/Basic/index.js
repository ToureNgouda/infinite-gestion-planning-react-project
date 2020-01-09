import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.css';
import { employeService } from '../../../services/employeService';

import {
    Row, Col,
    Card, Table,
    CardBody, CardTitle, CustomInput
} from 'reactstrap';

import {
    Line,
    ResponsiveContainer,
    LineChart
} from 'recharts';



const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Page C', uv: 2000, pv: 6800, amt: 2290 },
    { name: 'Page D', uv: 4780, pv: 7908, amt: 2000 },
    { name: 'Page E', uv: 2890, pv: 9800, amt: 2181 },
    { name: 'Page F', uv: 1390, pv: 3800, amt: 1500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

// const data2 = [
//     { name: 'Page A', uv: 5400, pv: 5240, amt: 1240 },
//     { name: 'Page B', uv: 7300, pv: 4139, amt: 3221 },
//     { name: 'Page C', uv: 8200, pv: 7980, amt: 5229 },
//     { name: 'Page D', uv: 6278, pv: 4390, amt: 3200 },
//     { name: 'Page E', uv: 3189, pv: 7480, amt: 6218 },
//     { name: 'Page D', uv: 9478, pv: 6790, amt: 2200 },
//     { name: 'Page E', uv: 1289, pv: 1980, amt: 7218 },
//     { name: 'Page F', uv: 3139, pv: 2380, amt: 5150 },
//     { name: 'Page G', uv: 5349, pv: 3430, amt: 3210 },
// ];


export default class AnalyticsDashboard1 extends Component {
    getVacationActuel() {
        employeService.getVacationActuel().then(resp => {
            if (resp && resp.status === 200) {
                console.log("vacation actuel", resp);
                const employesInVacationActuel = resp.data.employes;
                this.setState({ employesInVacationActuel });
                this.setState({ heureDebutVactuel: resp.data.heureDebut });
                this.setState({ heureFinVactuel: resp.data.heureFin });
                this.setState({ date: resp.data.date });
            };
        });
    }
    getVacationPrecedante() {
        employeService.getVacationPrecedante().then(resp => {
            console.log("vacation precedente", resp);
            if (resp && resp.status === 200) {
                const employesInVacationPrecedante = resp.data.employes;
                this.setState({ employesInVacationPrecedante });
                this.setState({ heureDebutVprec: resp.data.heureDebut });
                this.setState({ heureFinVprec: resp.data.heureFin });
                this.setState({ date: resp.data.date });
            };
        });
    }
    getVacationSuivante() {
        employeService.getVacationSuivante().then(resp => {
            if (resp && resp.status === 200) {
                console.log("vacation suivante", resp);
                const employesInVacationSuivante = resp.data.employes;
                this.setState({ employesInVacationSuivante });
                this.setState({ heureDebutVsuiv: resp.data.heureDebut });
                this.setState({ heureFinVsuiv: resp.data.heureFin });
                this.setState({ dateSuivant: resp.data.date });
            };
        });
    }
    constructor(props) {
        super(props);
        this.getVacationActuel();
        this.getVacationPrecedante();
        this.getVacationSuivante();
        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            nombreBarman: 0,
            nombreSuperviseur: 0,
            nombreCommis: 0,
            nombreCoordonnateur: 0,
            nombreHotesse: 0,
            nombreEmployes: 0,
            employesInVacationActuel: [],
            employesInVacationSuivante: [],
            employesInVacationPrecedante: [],
            date: '',
            heureDebutVactuel: '',
            heureFinVactuel: '',
            heureDebutVsuiv: '',
            heureFinVsuiv: '',
            heureDebutVprec: '',
            heureFinVprec: '',
            dateSuivant: '',
            disabled: false

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.getNombreBarman();
        this.getNombreCommis();
        this.getNombreHotesse();
        this.getNombreSuperviseur();
        this.getNombreCoordonnateur();
    }
    handleChangeIsPresent = (employe) => {
        this.setState({ disabled: true });
        employeService.verifierPresenceInVacation(employe).then(result => {
            if (result && result.status === 200) {
                this.setState({ disabled: false });
                if (employe.nomVacation === "vacationActuel")
                    this.getVacationActuel();
                else if (employe.nomVacation === "vacationSuivante")
                    this.getVacationSuivante();
                else
                    this.getVacationPrecedante();

            }
            this.setState({ disabled: false });
        });

    }
    verifiePresenceVacation = (isPresent) => {
        if (isPresent === true)
            return true;
        else
            return false;
    }
    getEmploye(employe) {
        if (employe.typeEmploye === "Superviseur") {
            return (
                <tr className="superviseur" key={employe.id}>
                    <td>{employe.numero}</td>
                    <td>{employe.prenom}</td>
                    <td>{employe.nom}</td>
                    <td>{employe.typeEmploye}</td>
                    <td>  <CustomInput type="checkbox" id={employe.id} name={employe.id} checked={employe.isPresent} onChange={() => this.handleChangeIsPresent(employe)} disabled={this.state.disabled} />
                    </td>
                </tr>
            )
        }
        if (employe.typeEmploye === "Barman") {
            return (
                <tr className="barman" key={employe.id}>
                    <td>{employe.numero}</td>
                    <td>{employe.prenom}</td>
                    <td>{employe.nom}</td>
                    <td>{employe.typeEmploye}</td>
                    <td>  <CustomInput type="checkbox" id={employe.id} name={employe.id} checked={employe.isPresent} onChange={() => this.handleChangeIsPresent(employe)} disabled={this.state.disabled} />
                    </td>
                </tr>
            )
        }
        if (employe.typeEmploye === "Coordonnateur Cuisine") {
            return (
                <tr className="coordonnateur" key={employe.id}>
                    <td>{employe.numero}</td>
                    <td>{employe.prenom}</td>
                    <td>{employe.nom}</td>
                    <td>{employe.typeEmploye}</td>
                    <td>  <CustomInput type="checkbox" id={employe.id} name={employe.id} checked={employe.isPresent} onChange={() => this.handleChangeIsPresent(employe)} disabled={this.state.disabled} />
                    </td>
                </tr>
            )
        }
        if (employe.typeEmploye === "Commis Cuisine") {
            return (
                <tr className="commis" key={employe.id}>
                    <td>{employe.numero}</td>
                    <td>{employe.prenom}</td>
                    <td>{employe.nom}</td>
                    <td>{employe.typeEmploye}</td>
                    <td>  <CustomInput type="checkbox" id={employe.id} name={employe.id} checked={employe.isPresent} onChange={() => this.handleChangeIsPresent(employe)} disabled={this.state.disabled} />
                    </td>
                </tr>
            )
        }
        if (employe.typeEmploye === "Hotesse") {
            return (
                <tr className="hotesse" key={employe.id}>
                    <td>{employe.numero}</td>
                    <td>{employe.prenom}</td>
                    <td>{employe.nom}</td>
                    <td>{employe.typeEmploye}</td>
                    <td>  <CustomInput type="checkbox" id={employe.id} name={employe.id} checked={employe.isPresent} onChange={() => this.handleChangeIsPresent(employe)} disabled={this.state.disabled} />
                    </td>
                </tr>
            )
        }
    }
    getNombreBarman() {
        employeService.getNombreBarman().then(resp => {
            if (resp && resp.status === 200) {
                const nombreBarman = resp.data;
                console.log("nombre barman", resp)
                this.setState({ nombreBarman });
            }
        })
    }
    getNombreCoordonnateur() {
        employeService.getNombreCoordonnateur().then(resp => {
            if (resp && resp.status === 200) {
                const nombreCoordonnateur = resp.data;
                console.log("nombre coordonnateur", resp)
                this.setState({ nombreCoordonnateur });
            }
        })
    }
    getNombreSuperviseur() {
        employeService.getNombreSuperviseur().then(resp => {
            console.log("nombre commis", resp.data)
            if (resp && resp.status === 200) {
                const nombreSuperviseur = resp.data;
                this.setState({ nombreSuperviseur });
            }
        });
    }
    getNombreCommis() {
        employeService.getNombreCommis().then(resp => {
            if (resp.status === 200) {
                const nombreCommis = resp.data;
                this.setState({ nombreCommis });
            }
        });
    }
    getNombreHotesse() {
        employeService.getNombreHotesse().then(resp => {
            if (resp && resp.status === 200) {
                const nombreHotesse = resp.data;
                this.setState({ nombreHotesse });
            }
        })
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <Row>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>
                                            Vacation actuel <br /> {this.state.date} à {this.state.heureDebutVactuel}-{this.state.heureFinVactuel}
                                        </CardTitle>

                                        <Table responsive className="mb-0">
                                            <thead>
                                                <tr>
                                                    <th >N°</th>
                                                    <th className="titre">PRENOM</th>
                                                    <th className="nom">NOM</th>
                                                    <th className="type">TYPE</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.employesInVacationActuel.map(employe => (
                                                    this.getEmploye(employe)
                                                ))}
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Row>
                                    <Col md="6">
                                        <div className="card mb-3 bg-arielle-smile widget-chart text-white card-border">
                                            <div className="icon-wrapper rounded-circle">
                                                <div className="icon-wrapper-bg bg-white opacity-10" />
                                                <i className="lnr-cog icon-gradient bg-arielle-smile" />
                                            </div>
                                            <div className="widget-numbers">
                                                {this.state.nombreSuperviseur}
                                            </div>
                                            <div className="widget-subheading">
                                                <b>Superviseurs actifs</b>
                                            </div>
                                            <div className="widget-chart-wrapper">
                                                <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                    <LineChart data={data}
                                                        margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                                                        <Line type='monotone' dataKey='pv' stroke='#ffffff' strokeWidth={3} />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="card mb-3 bg-grow-early widget-chart text-white card-border">
                                            <div className="icon-wrapper rounded">
                                                <div className="icon-wrapper-bg bg-dark opacity-9" />
                                                <i className="lnr-graduation-hat text-white" />
                                            </div>
                                            <div className="widget-numbers widget-numbers-hot">
                                                {this.state.nombreHotesse}
                                            </div>
                                            <div className="widget-subheading hot">
                                                <b> Hotesses actives</b>
                                            </div>
                                            <div className="widget-chart-wrapper">
                                                <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                    <LineChart data={data}
                                                        margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                                                        <Line type='monotone' dataKey='pv' stroke='#000000' strokeWidth={3} />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md="6">
                                        <div className="card mb-3 bg-love-coord widget-chart card-border">
                                            <div className="widget-chart-content text-white">
                                                <div className="icon-wrapper rounded-circle">
                                                    <div className="icon-wrapper-bg bg-white opacity-4" />
                                                    <i className="lnr-cog" />
                                                </div>
                                                <div className="widget-numbers">
                                                    {this.state.nombreCoordonnateur}
                                                </div>
                                                <div className="widget-subheading">
                                                    <b>Coordonnateur Cuisine actifs</b>
                                                </div>
                                                {/* <div className="widget-description">
                                                    <FontAwesomeIcon className="text-white opacity-5" icon={faAngleUp}/>
                                                    <span className="text-white">175.5%</span>
                                                </div> */}
                                            </div>
                                            <div className="widget-chart-wrapper">
                                                <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                    <LineChart data={data}
                                                        margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                                                        <Line type='monotone' dataKey='pv' stroke='#ffffff' strokeWidth={3} />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                                            <div className="icon-wrapper rounded">
                                                <div className="icon-wrapper-bg bg-white opacity-10" />
                                                <i className="lnr-screen icon-gradient bg-warm-flame" />
                                            </div>
                                            <div className="widget-numbers widget-numbers-hot">
                                                {this.state.nombreCommis}
                                            </div>
                                            <div className="widget-subheading hot">
                                                <b> Commis cuisine actifs</b>
                                            </div>
                                            <div className="widget-chart-wrapper">
                                                <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                    <LineChart data={data}
                                                        margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                                                        <Line type='monotone' dataKey='pv' stroke='#000000' strokeWidth={3} />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </Col>


                                </Row>
                                <Row>
                                    <Col md="6">
                                        <div className="card mb-3 bg-love-kiss widget-chart card-border">
                                            <div className="widget-chart-content text-white">
                                                <div className="icon-wrapper rounded-circle">
                                                    <div className="icon-wrapper-bg bg-white opacity-4" />
                                                    <i className="lnr-cog" />
                                                </div>
                                                <div className="widget-numbers">
                                                    {this.state.nombreBarman}
                                                </div>
                                                <div className="widget-subheading">
                                                    <b>Barmans actifs</b>
                                                </div>
                                                {/* <div className="widget-description">
                                                    <FontAwesomeIcon className="text-white opacity-5" icon={faAngleUp}/>
                                                    <span className="text-white">175.5%</span>
                                                </div> */}
                                            </div>
                                            <div className="widget-chart-wrapper">
                                                <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                    <LineChart data={data}
                                                        margin={{ top: 0, right: 5, left: 5, bottom: 0 }}>
                                                        <Line type='monotone' dataKey='pv' stroke='#ffffff' strokeWidth={3} />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md="12"></Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>
                                            Vacation precédente <br /> {this.state.date} à {this.state.heureDebutVprec}-{this.state.heureFinVprec}
                                        </CardTitle>

                                        <Table responsive className="mb-0">
                                            <thead>
                                                <tr>
                                                    <th >N°</th>
                                                    <th className="titre">PRENOM</th>
                                                    <th className="nom">NOM</th>
                                                    <th className="type">TYPE</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.employesInVacationPrecedante.map(employe => (
                                                    this.getEmploye(employe)
                                                ))}
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>
                                            Vacation suivante <br /> {this.state.dateSuivant} à {this.state.heureDebutVsuiv}-{this.state.heureFinVsuiv}
                                        </CardTitle>

                                        <Table responsive className="mb-0">
                                            <thead>
                                                <tr>
                                                    <th>N°</th>
                                                    <th className="titre">PRENOM</th>
                                                    <th className="titre">NOM</th>
                                                    <th className="titre">TYPE</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.employesInVacationSuivante.map(employe => (
                                                    this.getEmploye(employe)

                                                ))}
                                            </tbody>

                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>

                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
