import React, { Component } from 'react';
import './index.css';
import { Table } from 'reactstrap';
import { gestionHoraireService } from '../../../services/gestionHoraireService';

// import { Container } from './styles';

export default class ShowParametres extends Component {
    getAllGestionHoraire() {
        gestionHoraireService.getAllGestionHoraire().then(result => {
            if (result && result.status === 200) {
                console.log("gestion horaire", result.data.jour1H1["\u0000*\u0000original"]);
                if (result.data.jour1H1) {
                    const jour1H1 = result.data.jour1H1["\u0000*\u0000original"];
                    this.setState({ jour1H1 })
                }
                if (result.data.jour1H2) {
                    const jour1H2 = result.data.jour1H2["\u0000*\u0000original"];
                    this.setState({ jour1H2 })
                }
                if (result.data.jour1H3) {
                    const jour1H3 = result.data.jour1H3["\u0000*\u0000original"];
                    this.setState({ jour1H3 })
                }
                if (result.data.jour2H1) {
                    const jour2H1 = result.data.jour2H1["\u0000*\u0000original"];
                    this.setState({ jour2H1 })
                }
                if (result.data.jour2H1) {
                    const jour2H2 = result.data.jour2H2["\u0000*\u0000original"];
                    this.setState({ jour2H2 })
                }
                if (result.data.jour2H3) {
                    const jour2H3 = result.data.jour2H3["\u0000*\u0000original"];
                    this.setState({ jour2H3 })
                }
                if (result.data.jour3H1) {
                    const jour3H1 = result.data.jour3H1["\u0000*\u0000original"];
                    this.setState({ jour3H1 })
                }
                if (result.data.jour3H1) {
                    const jour3H2 = result.data.jour3H2["\u0000*\u0000original"];
                    this.setState({ jour3H2 })
                }
                if (result.data.jour3H3) {
                    const jour3H3 = result.data.jour3H3["\u0000*\u0000original"];
                    this.setState({ jour3H3 })
                }
                if (result.data.jour4H1) {
                    const jour4H1 = result.data.jour4H1["\u0000*\u0000original"];
                    this.setState({ jour4H1 })
                }
                if (result.data.jour4H2) {
                    const jour4H2 = result.data.jour4H2["\u0000*\u0000original"];
                    this.setState({ jour4H2 })
                }
                if (result.data.jour4H3) {
                    const jour4H3 = result.data.jour4H3["\u0000*\u0000original"];
                    this.setState({ jour4H3 })
                }
                if (result.data.jour5H1) {
                    const jour5H1 = result.data.jour5H1["\u0000*\u0000original"];
                    this.setState({ jour5H1 })
                }
                if (result.data.jour5H2) {
                    const jour5H2 = result.data.jour5H2["\u0000*\u0000original"];
                    this.setState({ jour5H2 })
                }
                if (result.data.jour5H3) {
                    const jour5H3 = result.data.jour5H3["\u0000*\u0000original"];
                    this.setState({ jour5H3 })
                }
                if (result.data.jour6H1) {
                    const jour6H1 = result.data.jour6H1["\u0000*\u0000original"];
                    this.setState({ jour6H1 })
                }
                if (result.data.jour6H2) {
                    const jour6H2 = result.data.jour6H2["\u0000*\u0000original"];
                    this.setState({ jour6H2 })
                }
                if (result.data.jour6H3) {
                    const jour6H3 = result.data.jour6H3["\u0000*\u0000original"];
                    this.setState({ jour6H3 })
                }
                if (result.data.jour7H1) {
                    const jour7H1 = result.data.jour7H1["\u0000*\u0000original"];
                    this.setState({ jour7H1 })
                }
                if (result.data.jour7H2) {
                    const jour7H2 = result.data.jour7H2["\u0000*\u0000original"];
                    this.setState({ jour7H2 })
                }
                if (result.data.jour7H3) {
                    const jour7H3 = result.data.jour7H3["\u0000*\u0000original"];
                    this.setState({ jour7H3 })
                }
            }
        })
    }

    constructor(props) {
        super(props);
        this.getAllGestionHoraire();
        this.state = {
            jour1H1: {},
            jour1H2: {},
            jour1H3: {},
            jour2H1: {},
            jour2H2: {},
            jour2H3: {},
            jour3H1: {},
            jour3H2: {},
            jour3H3: {},
            jour4H1: {},
            jour4H2: {},
            jour4H3: {},
            jour5H1: {},
            jour5H2: {},
            jour5H3: {},
            jour6H1: {},
            jour6H2: {},
            jour6H3: {},
            jour7H1: {},
            jour7H2: {},
            jour7H3: {},
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        let jour1H1 = { ...this.state.jour1H1 };
        let jour1H2 = { ...this.state.jour1H2 };
        let jour1H3 = { ...this.state.jour1H3 };
        let jour2H1 = { ...this.state.jour2H1 };
        let jour2H2 = { ...this.state.jour2H2 };
        let jour2H3 = { ...this.state.jour2H3 };
        let jour3H1 = { ...this.state.jour3H1 };
        let jour3H2 = { ...this.state.jour3H2 };
        let jour3H3 = { ...this.state.jour3H3 };
        let jour4H1 = { ...this.state.jour4H1 };
        let jour4H2 = { ...this.state.jour4H2 };
        let jour4H3 = { ...this.state.jour4H3 };
        let jour5H1 = { ...this.state.jour5H1 };
        let jour5H2 = { ...this.state.jour5H2 };
        let jour5H3 = { ...this.state.jour5H3 };
        let jour6H1 = { ...this.state.jour6H1 };
        let jour6H2 = { ...this.state.jour6H2 };
        let jour6H3 = { ...this.state.jour6H3 };
        let jour7H1 = { ...this.state.jour7H1 };
        let jour7H2 = { ...this.state.jour7H2 };
        let jour7H3 = { ...this.state.jour7H3 };

        //superviseur
        if (name === "supJ1H1") {
            jour1H1.nombreDeSuperviseur = value;
            this.setState({ jour1H1 });
        }
        if (name === "supJ1H2") {
            jour1H2.nombreDeSuperviseur = value;
            this.setState({ jour1H2 });
        }
        if (name === "supJ1H3") {
            jour1H3.nombreDeSuperviseur = value;
            this.setState({ jour1H3 });
        }
        if (name === "supJ2H1") {
            jour2H1.nombreDeSuperviseur = value;
            this.setState({ jour2H1 });
        }
        if (name === "supJ2H2") {
            jour2H2.nombreDeSuperviseur = value;
            this.setState({ jour2H2 });
        }
        if (name === "supJ2H3") {
            jour2H3.nombreDeSuperviseur = value;
            this.setState({ jour2H3 });
        }
        if (name === "supJ3H1") {
            jour3H1.nombreDeSuperviseur = value;
            this.setState({ jour3H1 });
        }
        if (name === "supJ3H2") {
            jour3H2.nombreDeSuperviseur = value;
            this.setState({ jour3H2 });
        }
        if (name === "supJ3H3") {
            jour3H3.nombreDeSuperviseur = value;
            this.setState({ jour3H3 });
        }
        if (name === "supJ4H1") {
            jour4H1.nombreDeSuperviseur = value;
            this.setState({ jour4H1 });
        }
        if (name === "supJ4H2") {
            jour4H2.nombreDeSuperviseur = value;
            this.setState({ jour4H2 });
        }
        if (name === "supJ4H3") {
            jour4H3.nombreDeSuperviseur = value;
            this.setState({ jour4H3 });
        }
        if (name === "supJ5H1") {
            jour5H1.nombreDeSuperviseur = value;
            this.setState({ jour5H1 });
        }
        if (name === "supJ5H2") {
            jour5H2.nombreDeSuperviseur = value;
            this.setState({ jour5H2 });
        }
        if (name === "supJ5H3") {
            jour5H3.nombreDeSuperviseur = value;
            this.setState({ jour5H3 });
        }
        if (name === "supJ6H1") {
            jour6H1.nombreDeSuperviseur = value;
            this.setState({ jour6H1 });
        }
        if (name === "supJ6H2") {
            jour6H2.nombreDeSuperviseur = value;
            this.setState({ jour6H2 });
        }
        if (name === "supJ6H3") {
            jour6H3.nombreDeSuperviseur = value;
            this.setState({ jour6H3 });
        }
        if (name === "supJ7H1") {
            jour7H1.nombreDeSuperviseur = value;
            this.setState({ jour7H1 });
        }
        if (name === "supJ7H2") {
            jour7H2.nombreDeSuperviseur = value;
            this.setState({ jour7H2 });
        }
        if (name === "supJ7H3") {
            jour7H3.nombreDeSuperviseur = value;
            this.setState({ jour7H3 });
        }

        //commis
        if (name === "commisJ1H1") {
            jour1H1.nombreDeCommis = value;
            this.setState({ jour1H1 });
        }
        if (name === "commisJ1H2") {
            jour1H2.nombreDeCommis = value;
            this.setState({ jour1H2 });
        }
        if (name === "commisJ1H3") {
            jour1H3.nombreDeCommis = value;
            this.setState({ jour1H3 });
        }
        if (name === "commisJ2H1") {
            jour2H1.nombreDeCommis = value;
            this.setState({ jour2H1 });
        }
        if (name === "commisJ2H2") {
            jour2H2.nombreDeCommis = value;
            this.setState({ jour2H2 });
        }
        if (name === "commisJ2H3") {
            jour2H3.nombreDeCommis = value;
            this.setState({ jour2H3 });
        }
        if (name === "commisJ3H1") {
            jour3H1.nombreDeCommis = value;
            this.setState({ jour3H1 });
        }
        if (name === "commisJ3H2") {
            jour3H2.nombreDeCommis = value;
            this.setState({ jour3H2 });
        }
        if (name === "commisJ3H3") {
            jour3H3.nombreDeCommis = value;
            this.setState({ jour3H3 });
        }
        if (name === "commisJ4H1") {
            jour4H1.nombreDeCommis = value;
            this.setState({ jour4H1 });
        }
        if (name === "commisJ4H2") {
            jour4H2.nombreDeCommis = value;
            this.setState({ jour4H2 });
        }
        if (name === "commisJ4H3") {
            jour4H3.nombreDeCommis = value;
            this.setState({ jour4H3 });
        }
        if (name === "commisJ5H1") {
            jour5H1.nombreDeCommis = value;
            this.setState({ jour5H1 });
        }
        if (name === "commisJ5H2") {
            jour5H2.nombreDeCommis = value;
            this.setState({ jour5H2 });
        }
        if (name === "commisJ5H3") {
            jour5H3.nombreDeCommis = value;
            this.setState({ jour5H3 });
        }
        if (name === "commisJ6H1") {
            jour6H1.nombreDeCommis = value;
            this.setState({ jour6H1 });
        }
        if (name === "commisJ6H2") {
            jour6H2.nombreDeCommis = value;
            this.setState({ jour6H2 });
        }
        if (name === "commisJ6H3") {
            jour6H3.nombreDeCommis = value;
            this.setState({ jour6H3 });
        }
        if (name === "commisJ7H1") {
            jour7H1.nombreDeCommis = value;
            this.setState({ jour7H1 });
        }
        if (name === "commisJ7H2") {
            jour7H2.nombreDeCommis = value;
            this.setState({ jour7H2 });
        }
        if (name === "commisJ7H3") {
            jour7H3.nombreDeCommis = value;
            this.setState({ jour7H3 });
        }


         //commis
         if (name === "hoteJ1H1") {
            jour1H1.nombreDeHotesse = value;
            this.setState({ jour1H1 });
        }
        if (name === "hoteJ1H2") {
            jour1H2.nombreDeHotesse = value;
            this.setState({ jour1H2 });
        }
        if (name === "hoteJ1H3") {
            jour1H3.nombreDeHotesse = value;
            this.setState({ jour1H3 });
        }
        if (name === "hoteJ2H1") {
            jour2H1.nombreDeHotesse = value;
            this.setState({ jour2H1 });
        }
        if (name === "hoteJ2H2") {
            jour2H2.nombreDeHotesse = value;
            this.setState({ jour2H2 });
        }
        if (name === "hoteJ2H3") {
            jour2H3.nombreDeHotesse = value;
            this.setState({ jour2H3 });
        }
        if (name === "hoteJ3H1") {
            jour3H1.nombreDeHotesse = value;
            this.setState({ jour3H1 });
        }
        if (name === "hoteJ3H2") {
            jour3H2.nombreDeHotesse = value;
            this.setState({ jour3H2 });
        }
        if (name === "hoteJ3H3") {
            jour3H3.nombreDeHotesse = value;
            this.setState({ jour3H3 });
        }
        if (name === "hoteJ4H1") {
            jour4H1.nombreDeHotesse = value;
            this.setState({ jour4H1 });
        }
        if (name === "hoteJ4H2") {
            jour4H2.nombreDeHotesse = value;
            this.setState({ jour4H2 });
        }
        if (name === "hoteJ4H3") {
            jour4H3.nombreDeHotesse = value;
            this.setState({ jour4H3 });
        }
        if (name === "hoteJ5H1") {
            jour5H1.nombreDeHotesse = value;
            this.setState({ jour5H1 });
        }
        if (name === "hoteJ5H2") {
            jour5H2.nombreDeHotesse = value;
            this.setState({ jour5H2 });
        }
        if (name === "hoteJ5H3") {
            jour5H3.nombreDeHotesse = value;
            this.setState({ jour5H3 });
        }
        if (name === "hoteJ6H1") {
            jour6H1.nombreDeHotesse = value;
            this.setState({ jour6H1 });
        }
        if (name === "hoteJ6H2") {
            jour6H2.nombreDeHotesse = value;
            this.setState({ jour6H2 });
        }
        if (name === "hoteJ6H3") {
            jour6H3.nombreDeHotesse = value;
            this.setState({ jour6H3 });
        }
        if (name === "hoteJ7H1") {
            jour7H1.nombreDeHotesse = value;
            this.setState({ jour7H1 });
        }
        if (name === "hoteJ7H2") {
            jour7H2.nombreDeHotesse = value;
            this.setState({ jour7H2 });
        }
        if (name === "hoteJ7H3") {
            jour7H3.nombreDeHotesse = value;
            this.setState({ jour7H3 });
        }

         //barman
         if (name === "barmanJ1H1") {
            jour1H1.nombreDeBarman = value;
            this.setState({ jour1H1 });
        }
        if (name === "barmanJ1H2") {
            jour1H2.nombreDeBarman = value;
            this.setState({ jour1H2 });
        }
        if (name === "barmanJ1H3") {
            jour1H3.nombreDeBarman = value;
            this.setState({ jour1H3 });
        }
        if (name === "barmanJ2H1") {
            jour2H1.nombreDeBarman = value;
            this.setState({ jour2H1 });
        }
        if (name === "barmanJ2H2") {
            jour2H2.nombreDeBarman = value;
            this.setState({ jour2H2 });
        }
        if (name === "barmanJ2H3") {
            jour2H3.nombreDeBarman = value;
            this.setState({ jour2H3 });
        }
        if (name === "barmanJ3H1") {
            jour3H1.nombreDeBarman = value;
            this.setState({ jour3H1 });
        }
        if (name === "barmanJ3H2") {
            jour3H2.nombreDeBarman = value;
            this.setState({ jour3H2 });
        }
        if (name === "barmanJ3H3") {
            jour3H3.nombreDeBarman = value;
            this.setState({ jour3H3 });
        }
        if (name === "barmanJ4H1") {
            jour4H1.nombreDeBarman = value;
            this.setState({ jour4H1 });
        }
        if (name === "barmanJ4H2") {
            jour4H2.nombreDeBarman = value;
            this.setState({ jour4H2 });
        }
        if (name === "barmanJ4H3") {
            jour4H3.nombreDeBarman = value;
            this.setState({ jour4H3 });
        }
        if (name === "barmanJ5H1") {
            jour5H1.nombreDeBarman = value;
            this.setState({ jour5H1 });
        }
        if (name === "barmanJ5H2") {
            jour5H2.nombreDeBarman = value;
            this.setState({ jour5H2 });
        }
        if (name === "barmanJ5H3") {
            jour5H3.nombreDeBarman = value;
            this.setState({ jour5H3 });
        }
        if (name === "barmanJ6H1") {
            jour6H1.nombreDeBarman = value;
            this.setState({ jour6H1 });
        }
        if (name === "barmanJ6H2") {
            jour6H2.nombreDeBarman = value;
            this.setState({ jour6H2 });
        }
        if (name === "barmanJ6H3") {
            jour6H3.nombreDeBarman = value;
            this.setState({ jour6H3 });
        }
        if (name === "barmanJ7H1") {
            jour7H1.nombreDeBarman = value;
            this.setState({ jour7H1 });
        }
        if (name === "barmanJ7H2") {
            jour7H2.nombreDeBarman = value;
            this.setState({ jour7H2 });
        }
        if (name === "barmanJ7H3") {
            jour7H3.nombreDeBarman = value;
            this.setState({ jour7H3 });
        }


          //coord
          if (name === "coordJ1H1") {
            jour1H1.nombreDeCoordonnateur = value;
            this.setState({ jour1H1 });
        }
        if (name === "coordJ1H2") {
            jour1H2.nombreDeCoordonnateur = value;
            this.setState({ jour1H2 });
        }
        if (name === "coordJ1H3") {
            jour1H3.nombreDeCoordonnateur = value;
            this.setState({ jour1H3 });
        }
        if (name === "coordJ2H1") {
            jour2H1.nombreDeCoordonnateur = value;
            this.setState({ jour2H1 });
        }
        if (name === "coordJ2H2") {
            jour2H2.nombreDeCoordonnateur = value;
            this.setState({ jour2H2 });
        }
        if (name === "coordJ2H3") {
            jour2H3.nombreDeCoordonnateur = value;
            this.setState({ jour2H3 });
        }
        if (name === "coordJ3H1") {
            jour3H1.nombreDeCoordonnateur = value;
            this.setState({ jour3H1 });
        }
        if (name === "coordJ3H2") {
            jour3H2.nombreDeCoordonnateur = value;
            this.setState({ jour3H2 });
        }
        if (name === "coordJ3H3") {
            jour3H3.nombreDeCoordonnateur = value;
            this.setState({ jour3H3 });
        }
        if (name === "coordJ4H1") {
            jour4H1.nombreDeCoordonnateur = value;
            this.setState({ jour4H1 });
        }
        if (name === "coordJ4H2") {
            jour4H2.nombreDeCoordonnateur = value;
            this.setState({ jour4H2 });
        }
        if (name === "coordJ4H3") {
            jour4H3.nombreDeCoordonnateur = value;
            this.setState({ jour4H3 });
        }
        if (name === "coordJ5H1") {
            jour5H1.nombreDeCoordonnateur = value;
            this.setState({ jour5H1 });
        }
        if (name === "coordJ5H2") {
            jour5H2.nombreDeCoordonnateur = value;
            this.setState({ jour5H2 });
        }
        if (name === "coordJ5H3") {
            jour5H3.nombreDeCoordonnateur = value;
            this.setState({ jour5H3 });
        }
        if (name === "coordJ6H1") {
            jour6H1.nombreDeCoordonnateur = value;
            this.setState({ jour6H1 });
        }
        if (name === "coordJ6H2") {
            jour6H2.nombreDeCoordonnateur = value;
            this.setState({ jour6H2 });
        }
        if (name === "coordJ6H3") {
            jour6H3.nombreDeCoordonnateur = value;
            this.setState({ jour6H3 });
        }
        if (name === "coordJ7H1") {
            jour7H1.nombreDeCoordonnateur = value;
            this.setState({ jour7H1 });
        }
        if (name === "coordJ7H2") {
            jour7H2.nombreDeCoordonnateur = value;
            this.setState({ jour7H2 });
        }
        if (name === "coordJ7H3") {
            jour7H3.nombreDeCoordonnateur = value;
            this.setState({ jour7H3 });
        }


    }

    render() {
        return (
            <div>
                <Table bordered>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>L</th>
                            <th>M</th>
                            <th>Me</th>
                            <th>J</th>
                            <th>V</th>
                            <th>S</th>
                            <th>D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="horaire">08h00-16h00</th>
                            <td>
                                <div className="param">Superviseur</div>
                                <div className="param">Commis</div>
                                <div className="param">Hotesse</div>
                                <div className="param">Barman</div>
                                <div className="param">Coordonnateur</div>
                            </td>
                            <td>
                                {this.state.jour1H1 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ1H1" onChange={this.handleChange}
                                                value={this.state.jour1H1.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ1H1" onChange={this.handleChange}
                                                value={this.state.jour1H1.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ1H1" onChange={this.handleChange}
                                                value={this.state.jour1H1.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ1H1" onChange={this.handleChange}
                                                value={this.state.jour1H1.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ1H1" onChange={this.handleChange}
                                                value={this.state.jour1H1.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}

                            </td>
                            <td>
                            {this.state.jour2H1 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ2H1" onChange={this.handleChange}
                                                value={this.state.jour2H1.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ2H1" onChange={this.handleChange}
                                                value={this.state.jour2H1.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ2H1" onChange={this.handleChange}
                                                value={this.state.jour2H1.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ2H1" onChange={this.handleChange}
                                                value={this.state.jour2H1.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ2H1" onChange={this.handleChange}
                                                value={this.state.jour2H1.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}

                                </td>
                            <td>
                            {this.state.jour3H1 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ3H1" onChange={this.handleChange}
                                                value={this.state.jour3H1.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ3H1" onChange={this.handleChange}
                                                value={this.state.jour3H1.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ3H1" onChange={this.handleChange}
                                                value={this.state.jour3H1.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ3H1" onChange={this.handleChange}
                                                value={this.state.jour3H1.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ3H1" onChange={this.handleChange}
                                                value={this.state.jour3H1.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                
                                </td>
                            <td>
                            {this.state.jour4H1 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ4H1" onChange={this.handleChange}
                                                value={this.state.jour4H1.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ4H1" onChange={this.handleChange}
                                                value={this.state.jour4H1.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ4H1" onChange={this.handleChange}
                                                value={this.state.jour4H1.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ4H1" onChange={this.handleChange}
                                                value={this.state.jour4H1.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ4H1" onChange={this.handleChange}
                                                value={this.state.jour4H1.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                    </td>
                            <td>
                            {this.state.jour5H1 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ5H1" onChange={this.handleChange}
                                                value={this.state.jour5H1.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ5H1" onChange={this.handleChange}
                                                value={this.state.jour1H1.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ5H1" onChange={this.handleChange}
                                                value={this.state.jour5H1.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ5H1" onChange={this.handleChange}
                                                value={this.state.jour5H1.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ5H1" onChange={this.handleChange}
                                                value={this.state.jour5H1.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour6H1 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ6H1" onChange={this.handleChange}
                                                value={this.state.jour6H1.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ6H1" onChange={this.handleChange}
                                                value={this.state.jour6H1.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ6H1" onChange={this.handleChange}
                                                value={this.state.jour6H1.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ6H1" onChange={this.handleChange}
                                                value={this.state.jour6H1.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ6H1" onChange={this.handleChange}
                                                value={this.state.jour6H1.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour7H1 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ7H1" onChange={this.handleChange}
                                                value={this.state.jour7H1.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ7H1" onChange={this.handleChange}
                                                value={this.state.jour7H1.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ7H1" onChange={this.handleChange}
                                                value={this.state.jour7H1.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ7H1" onChange={this.handleChange}
                                                value={this.state.jour7H1.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ7H1" onChange={this.handleChange}
                                                value={this.state.jour7H1.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                        </tr>
                        <tr>
                            <th scope="row" className="horaire">16h00-00h00</th>
                            <td>
                                <div className="param">Superviseur</div>
                                <div className="param">Commis</div>
                                <div className="param">Hotesse</div>
                                <div className="param">Barman</div>
                                <div className="param">Coordonnateur</div>
                            </td>
                            <td>
                            {this.state.jour1H2 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ1H2" onChange={this.handleChange}
                                                value={this.state.jour1H2.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ1H2" onChange={this.handleChange}
                                                value={this.state.jour1H2.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ1H2" onChange={this.handleChange}
                                                value={this.state.jour1H2.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ1H2" onChange={this.handleChange}
                                                value={this.state.jour1H2.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ1H2" onChange={this.handleChange}
                                                value={this.state.jour1H2.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                            </td>
                            <td>
                            {this.state.jour2H2 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ2H2" onChange={this.handleChange}
                                                value={this.state.jour2H2.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ2H2" onChange={this.handleChange}
                                                value={this.state.jour2H2.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ2H2" onChange={this.handleChange}
                                                value={this.state.jour2H2.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ2H2" onChange={this.handleChange}
                                                value={this.state.jour2H2.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ2H2" onChange={this.handleChange}
                                                value={this.state.jour2H2.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour3H2 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ3H2" onChange={this.handleChange}
                                                value={this.state.jour3H2.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ3H2" onChange={this.handleChange}
                                                value={this.state.jour3H2.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ3H2" onChange={this.handleChange}
                                                value={this.state.jour3H2.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ3H2" onChange={this.handleChange}
                                                value={this.state.jour3H2.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ3H2" onChange={this.handleChange}
                                                value={this.state.jour3H2.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour4H2 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ4H2" onChange={this.handleChange}
                                                value={this.state.jour4H2.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ4H2" onChange={this.handleChange}
                                                value={this.state.jour4H2.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ4H2" onChange={this.handleChange}
                                                value={this.state.jour4H2.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ4H2" onChange={this.handleChange}
                                                value={this.state.jour4H2.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ4H2" onChange={this.handleChange}
                                                value={this.state.jour4H2.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour5H2 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ5H2" onChange={this.handleChange}
                                                value={this.state.jour5H2.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ5H2" onChange={this.handleChange}
                                                value={this.state.jour5H2.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ5H2" onChange={this.handleChange}
                                                value={this.state.jour5H2.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ5H2" onChange={this.handleChange}
                                                value={this.state.jour5H2.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ5H2" onChange={this.handleChange}
                                                value={this.state.jour5H2.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour6H2 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ6H2" onChange={this.handleChange}
                                                value={this.state.jour6H2.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ6H2" onChange={this.handleChange}
                                                value={this.state.jour6H2.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ6H2" onChange={this.handleChange}
                                                value={this.state.jour6H2.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ6H2" onChange={this.handleChange}
                                                value={this.state.jour6H2.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ6H2" onChange={this.handleChange}
                                                value={this.state.jour6H2.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour7H2 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ7H2" onChange={this.handleChange}
                                                value={this.state.jour7H2.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ7H2" onChange={this.handleChange}
                                                value={this.state.jour7H2.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ7H2" onChange={this.handleChange}
                                                value={this.state.jour7H2.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ7H2" onChange={this.handleChange}
                                                value={this.state.jour7H2.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ7H2" onChange={this.handleChange}
                                                value={this.state.jour7H2.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                        </tr>
                        <tr>
                            <th scope="row" className="horaire">00h00-08h00</th>
                            <td>
                                <div className="param">Superviseur</div>
                                <div className="param">Commis</div>
                                <div className="param">Hotesse</div>
                                <div className="param">Barman</div>
                                <div className="param">Coordonnateur</div>
                            </td>
                            <td>
                            {this.state.jour1H3 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ1H3" onChange={this.handleChange}
                                                value={this.state.jour1H3.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ1H3" onChange={this.handleChange}
                                                value={this.state.jour1H3.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ1H3" onChange={this.handleChange}
                                                value={this.state.jour1H3.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ1H3" onChange={this.handleChange}
                                                value={this.state.jour1H3.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ1H3" onChange={this.handleChange}
                                                value={this.state.jour1H3.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                            </td>
                            <td>
                            {this.state.jour2H3 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ2H3" onChange={this.handleChange}
                                                value={this.state.jour2H3.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ2H3" onChange={this.handleChange}
                                                value={this.state.jour2H3.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ2H3" onChange={this.handleChange}
                                                value={this.state.jour2H3.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ2H3" onChange={this.handleChange}
                                                value={this.state.jour2H3.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ2H3" onChange={this.handleChange}
                                                value={this.state.jour2H3.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour3H3 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ3H3" onChange={this.handleChange}
                                                value={this.state.jour3H3.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ3H3" onChange={this.handleChange}
                                                value={this.state.jour3H3.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ3H3" onChange={this.handleChange}
                                                value={this.state.jour3H3.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ3H3" onChange={this.handleChange}
                                                value={this.state.jour3H3.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ3H3" onChange={this.handleChange}
                                                value={this.state.jour3H3.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour4H3 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ4H3" onChange={this.handleChange}
                                                value={this.state.jour4H3.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ4H3" onChange={this.handleChange}
                                                value={this.state.jour4H3.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ4H3" onChange={this.handleChange}
                                                value={this.state.jour4H3.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ4H3" onChange={this.handleChange}
                                                value={this.state.jour4H3.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ4H3" onChange={this.handleChange}
                                                value={this.state.jour4H3.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour5H3 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ5H3" onChange={this.handleChange}
                                                value={this.state.jour5H3.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ5H3" onChange={this.handleChange}
                                                value={this.state.jour5H3.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ5H3" onChange={this.handleChange}
                                                value={this.state.jour5H3.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ5H3" onChange={this.handleChange}
                                                value={this.state.jour5H3.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ5H3" onChange={this.handleChange}
                                                value={this.state.jour5H3.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour6H3 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ6H3" onChange={this.handleChange}
                                                value={this.state.jour6H3.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ6H3" onChange={this.handleChange}
                                                value={this.state.jour6H3.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ6H3" onChange={this.handleChange}
                                                value={this.state.jour6H3.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ6H3" onChange={this.handleChange}
                                                value={this.state.jour6H3.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ6H3" onChange={this.handleChange}
                                                value={this.state.jour6H3.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                            <td>
                            {this.state.jour7H3 &&
                                    <div>
                                        <div>
                                            <input type="number" name="supJ7H3" onChange={this.handleChange}
                                                value={this.state.jour7H3.nombreDeSuperviseur} />
                                        </div>
                                        <div>
                                            <input type="number" name="commisJ7H3" onChange={this.handleChange}
                                                value={this.state.jour7H3.nombreDeCommis} />
                                        </div>
                                        <div>
                                            <input type="number" name="hoteJ7H3" onChange={this.handleChange}
                                                value={this.state.jour7H3.nombreDeHotesse} />
                                        </div>
                                        <div>
                                            <input type="number" name="barmanJ7H3" onChange={this.handleChange}
                                                value={this.state.jour7H3.nombreDeBarman} />
                                        </div>
                                        <div>
                                            <input type="number" name="coordJ7H3" onChange={this.handleChange}
                                                value={this.state.jour7H3.nombreDeCoordonnateur} />
                                        </div>
                                    </div>}
                                </td>
                        </tr>
                    </tbody>
                </Table>
                <div className="pull-right">
                    <button className="btn btn-primary">Enregistre</button>
                </div>
            </div>


        );
    }

}
