import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { employeService } from '../../../services/employeService';
import './index.css';

export default class Planning extends Component {
    getVacationSemaine() {
        employeService.getVacationSemaine().then(result => {
            let semaines = [];
            if (result.status === 200) {
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
                    console.log("jour 1 horaire 1", this.state.jour1H1);

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
                    console.log("jour 2 H1",this.state.jour2H1)
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
                    console.log("jour 2 H1",this.state.jour3H1)
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
                }

                this.setState({ semaines });

            }
        });
    }
    constructor(props) {

        super(props);
        this.getVacationSemaine();
        this.state = {
            semaines: [],
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

        }
    }
    render() {
        return (

            <Table bordered>

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
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }

                                {jour.key === 2 && this.state.jour2H1.length > 0 &&
                                    this.state.jour2H1.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 3 && this.state.jour3H1.length > 0 &&
                                    this.state.jour3H1.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 4 && this.state.jour4H1.length > 0 &&
                                    this.state.jour4H1.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 5 && this.state.jour5H1.length > 0 &&
                                    this.state.jour5H1.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 6 && this.state.jour6H1.length > 0 &&
                                    this.state.jour6H1.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 7 && this.state.jour7H1.length > 0 &&
                                    this.state.jour7H1.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
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
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }

                                {jour.key === 2 && this.state.jour2H2.length > 0 &&
                                    this.state.jour2H2.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 3 && this.state.jour3H2.length > 0 &&
                                    this.state.jour3H2.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 4 && this.state.jour4H2.length > 0 &&
                                    this.state.jour4H2.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 5 && this.state.jour5H2.length > 0 &&
                                    this.state.jour5H2.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 6 && this.state.jour6H2.length > 0 &&
                                    this.state.jour6H2.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 7 && this.state.jour7H2.length > 0 &&
                                    this.state.jour7H2.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
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
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }

                                {jour.key === 2 && this.state.jour2H3.length > 0 &&
                                    this.state.jour2H3.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 3 && this.state.jour3H3.length > 0 &&
                                    this.state.jour3H3.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 4 && this.state.jour4H3.length > 0 &&
                                    this.state.jour4H3.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 5 && this.state.jour5H3.length > 0 &&
                                    this.state.jour5H3.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 6 && this.state.jour6H3.length > 0 &&
                                    this.state.jour6H3.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }
                                {jour.key === 7 && this.state.jour7H3.length > 0 &&
                                    this.state.jour7H3.map(employe => (
                                        <div key={employe.id}>
                                            {employe.typeEmploye === "Superviseur" &&
                                                <div className="superviseur">{employe.numero}</div>}
                                            {employe.typeEmploye === "Hotesse" &&
                                                <div className="hotesse">{employe.numero}</div>}
                                            {employe.typeEmploye === "Barman" &&
                                                <div className="barman"> {employe.numero}</div>}
                                            {employe.typeEmploye === "Commis Cuisine" &&
                                                <div className="commis" >{employe.numero}</div>}
                                            {employe.typeEmploye === "Coordonnateur Cuisine" &&
                                                <div className="coordonnateur" >{employe.numero}</div>}
                                        </div>

                                    ))
                                }

                            </td>

                        ))}
                    </tr>
                </tbody>
            </Table>
        );
    }

}
