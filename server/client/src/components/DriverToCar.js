import React, { Component } from 'react';
import {driverCar} from './UserFunctions'
import SideBar from './SideBar'
class DriverToCar extends Component {
    constructor() {
        super();

        this.state = {
            registrationNumber: '',
            email:''

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

        const driverToCar = {
            registrationNumber: this.state.registrationNumber,
            email: this.state.email
        }

        driverCar(driverToCar).then(res => {
            this.props.history.push(`/driverToCars`);
            return res;
        })

    }

    render() {
        return (
            <div className="FormCenter">
                <SideBar/>
                <form onSubmit={this.handleSubmit} className="FormFields" >
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="surname">Surname</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Podaj email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="registrationNumber">Registration Number</label>
                        <input type="text" id="registrationNumber" className="FormField__Input" placeholder="Podaj numer rejestracyjny" name="registrationNumber" value={this.state.registrationNumber} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button  className="FormField__Button mr-20">ADD</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default DriverToCar;