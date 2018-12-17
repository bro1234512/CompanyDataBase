import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {findCar} from './UserFunctions'
import SideBar from './SideBar'
class FindCar extends Component {
    constructor() {
        super();

        this.state = {
            registrationNumber: '',
            data: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const car = {
            registrationNumber: this.state.registrationNumber

        }

        findCar(car).then(res => {
            //console.log(res)
            this.setState({data: res})
        })

    }

    render() {
        return (
            <div className="FormCenter">
                <SideBar/>
                <form onSubmit={this.handleSubmit} className="FormFields" >
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="registrationNumber">Numer rejestracyjny</label>
                        <input type="registrationNumber" id="registrationNumber" className="FormField__Input" placeholder="Podaj numer rejestracyjny samochodu" name="registrationNumber" value={this.state.registrationNumber} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button  className="FormField__Button mr-20">SZUKAJ</button>
                    </div>
                    <div>
                        <ul>

                            <table>
                                <tr>
                                    <td>Numer rejestracyjny</td>
                                    <td>Marka</td>
                                    <td>Model</td>
                                    <td>Rocznik</td>
                                    <td>Data ważności przeglądu</td>
                                </tr>


                                <tr>
                                    <td>{this.state.data.registrationNumber}</td>
                                    <td>{this.state.data.mark}</td>
                                    <td>{this.state.data.model}</td>
                                    <td>{this.state.data.ageGroup}</td>
                                    <td>{this.state.data.carReviewTerm}</td>
                                </tr>

                            </table>

                        </ul>
                    </div>
                </form>
            </div>
        );
    }
}

export default FindCar;