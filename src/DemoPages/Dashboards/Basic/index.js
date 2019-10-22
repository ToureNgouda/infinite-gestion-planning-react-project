import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import { employeService } from '../../../services/employeService';

import {
    Row, Col,
    Button,
    CardHeader,
    Card, Table,
    CardBody, CardTitle,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';


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

const data2 = [
    { name: 'Page A', uv: 5400, pv: 5240, amt: 1240 },
    { name: 'Page B', uv: 7300, pv: 4139, amt: 3221 },
    { name: 'Page C', uv: 8200, pv: 7980, amt: 5229 },
    { name: 'Page D', uv: 6278, pv: 4390, amt: 3200 },
    { name: 'Page E', uv: 3189, pv: 7480, amt: 6218 },
    { name: 'Page D', uv: 9478, pv: 6790, amt: 2200 },
    { name: 'Page E', uv: 1289, pv: 1980, amt: 7218 },
    { name: 'Page F', uv: 3139, pv: 2380, amt: 5150 },
    { name: 'Page G', uv: 5349, pv: 3430, amt: 3210 },
];


export default class AnalyticsDashboard1 extends Component {
    getAllEmployes() {
        employeService.getAllEmployes().then(resp => {
            if (resp.status === 200) {
                const employes = resp.data;
                this.setState({ employes })
            };
        });
    }
    constructor(props) {
        super(props);
        this.getAllEmployes();
        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            nombreBarman: 0,
            nombreSuperviseur: 0,
            nombreCommis: 0,
            nombreHotesse: 0,
            nombreEmployes: 0,
            employes: []

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.getNombreBarman();
        this.getNombreCommis();
        this.getNombreHotesse();
        this.getNombreSuperviseur();

    }
    getNombreBarman() {
        employeService.getNombreBarman().then(resp => {
            const nombreBarman = resp.data;
            console.log("nombre barman", resp)
            this.setState({ nombreBarman });

        })
    }
    getNombreSuperviseur() {
        employeService.getNombreSuperviseur().then(resp => {
            console.log("nombre commis", resp.data)
            if (resp.status === 200) {
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
            if (resp.status === 200) {
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
                            <Col md="4">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>
                                            Vacation actuel
                                                </CardTitle>

                                        <Table responsive striped className="mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Prénom</th>
                                                    <th>Nom</th>
                                                    <th>Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Papa Mamadou </td>
                                                    <td>Ndiaye</td>
                                                    <td>Superviseur</td>
                                                </tr>
                                                <tr>
                                                    <td>Mariame</td>
                                                    <td>Sylla </td>
                                                    <td> Hotesse</td></tr>
                                                <tr>
                                                <td>Francois Khote</td>
                                                    <td>Diouf</td>
                                                    <td>Hotesse</td> 
                                                </tr>
                                                <tr>
                                                    <td>Assane</td>
                                                    <td>Diop</td>
                                                    <td>Commis</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>
                                            Vacation precédente
                                                </CardTitle>

                                        <Table responsive striped className="mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Prénom</th>
                                                    <th>Nom</th>
                                                    <th>Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Papa Mamadou </td>
                                                    <td>Ndiaye</td>
                                                    <td>Superviseur</td>
                                                </tr>
                                                <tr>
                                                    <td>Mariame</td>
                                                    <td>Sylla </td>
                                                    <td> Hotesse</td></tr>
                                                <tr>
                                                <td>Francois Khote</td>
                                                    <td>Diouf</td>
                                                    <td>Hotesse</td> 
                                                </tr>
                                                <tr>
                                                    <td>Assane</td>
                                                    <td>Diop</td>
                                                    <td>Commis</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>
                                            Vacation suivante
                                                </CardTitle>

                                        <Table responsive striped className="mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Prénom</th>
                                                    <th>Nom</th>
                                                    <th>Type</th>
                                                </tr>
                                            </thead>
                                            {/* <tbody>
                                                {this.state.employes.map(employe => (
                                                    <tr key={employe.id}>
                                                        <td>{employe.prenom}</td>
                                                        <td>{employe.nom}</td>
                                                        <td>{employe.typeEmploye}</td>
                                                    </tr>
                                                ))}
                                            </tbody> */}
                                             <tbody>
                                                <tr>
                                                    <td>Papa Mamadou </td>
                                                    <td>Ndiaye</td>
                                                    <td>Superviseur</td>
                                                </tr>
                                                <tr>
                                                    <td>Mariame</td>
                                                    <td>Sylla </td>
                                                    <td> Hotesse</td></tr>
                                                <tr>
                                                <td>Francois Khote</td>
                                                    <td>Diouf</td>
                                                    <td>Hotesse</td> 
                                                </tr>
                                                <tr>
                                                    <td>Assane</td>
                                                    <td>Diop</td>
                                                    <td>Commis</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="12"></Col>
                            <Col md="3">
                                <div className="card mb-3 bg-arielle-smile widget-chart text-white card-border">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-white opacity-10" />
                                        <i className="lnr-cog icon-gradient bg-arielle-smile" />
                                    </div>
                                    <div className="widget-numbers">
                                        {this.state.nombreSuperviseur}
                                    </div>
                                    <div className="widget-subheading">
                                        Superviseurs actifs
                                            </div>
                                    {/* <div className="widget-description text-white">
                                                <FontAwesomeIcon icon={faAngleUp}/>
                                                <span className="pl-1">54.9%</span>
                                            </div> */}
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                                    <div className="icon-wrapper rounded">
                                        <div className="icon-wrapper-bg bg-white opacity-10" />
                                        <i className="lnr-screen icon-gradient bg-warm-flame" />
                                    </div>
                                    <div className="widget-numbers">
                                        {this.state.nombreCommis}
                                    </div>
                                    <div className="widget-subheading">
                                        Commis cuisine actifs
                                            </div>
                                    {/* <div className="widget-description text-white">
                                                <span className="pr-1">62,7%</span>
                                                <FontAwesomeIcon icon={faArrowLeft}/>
                                            </div> */}
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="card mb-3 bg-grow-early widget-chart text-white card-border">
                                    <div className="icon-wrapper rounded">
                                        <div className="icon-wrapper-bg bg-dark opacity-9" />
                                        <i className="lnr-graduation-hat text-white" />
                                    </div>
                                    <div className="widget-numbers">
                                        {this.state.nombreHotesse}
                                    </div>
                                    <div className="widget-subheading">
                                        Hotesses actives
                                            </div>
                                    {/* <div className="widget-description text-white">
                                                <FontAwesomeIcon icon={faArrowRight}/>
                                                <span className="pl-1">72.1%</span>
                                            </div> */}
                                </div>
                            </Col>
                            <Col md="3">
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
                                            Barmans actifs
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

                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
