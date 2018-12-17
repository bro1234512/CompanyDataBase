import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addDriver} from './UserFunctions'
import SideBar from './SideBar'
class AddDriver extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            surname: '',
            birthdayDate: '',
            carLicenseTerm: '',
            email: ''

        }

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

        const driver = {

            name: this.state.name,
            surname: this.state.surname,
            birthdayDate: this.state.birthdayDate,
            carLicenseTerm: this.state.carLicenseTerm,
            email: this.state.email
        }

        addDriver(driver).then(res => {
            if(res){
                this.props.history.push(`/drivers`);
                return res;
            }
        })

    }

    render() {
        return (
            <div className="FormCenter">
                <SideBar/>
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Podaj imię" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="surname">Surname</label>
                        <input type="text" id="surname" className="FormField__Input" placeholder="Podaj nazwisko" name="surname" value={this.state.surname} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="birthdayDate">BirthdayDate</label>
                        <input type="date" id="birthdayDate" className="FormField__Input" placeholder="Podaj datę urodzenia" name="birthdayDate" value={this.state.birthdayDate} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="carLicenseTerm">CarLicenseTerm</label>
                        <input type="date" id="carLicenseTerm" className="FormField__Input" placeholder="Podaj datę ważności prawa jazdy" name="carLicenseTerm" value={this.state.carLicenseTerm} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="text" id="email" className="FormField__Input" placeholder="Enter email" name="Email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <button className="FormField__Button mr-20">Add</button>

                </form>
            </div>
        );
    }
}
export default AddDriver;