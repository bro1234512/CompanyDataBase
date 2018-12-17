import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {deleteCar} from './UserFunctions'
import SideBar from './SideBar'
class DeleteCar extends Component {
    constructor() {
        super();

        this.state = {
            registrationNumber: ''

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

        deleteCar(car).then(res => {
            this.props.history.push(`/cars`);
            return res;
        })

    }

    render() {
        return (
            <div className="FormCenter">
                <SideBar/>
                <form onSubmit={this.handleSubmit} className="FormFields" >
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="registrationNumber">Numer rejestracyjny</label>
                        <input type="registrationNumber" id="registrationNumber" className="FormField__Input" placeholder="Podaj numer rejestracyjny!!!" name="registrationNumber" value={this.state.registrationNumber} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button  className="FormField__Button mr-20">Usuń</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default DeleteCar;