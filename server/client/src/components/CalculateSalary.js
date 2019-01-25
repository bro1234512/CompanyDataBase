import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { calculateSalary} from './UserFunctions'
import SideBar from "./SideBar";
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            hours: '',
            yearsOfWorking: '',
            money: '0'


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

        const info = {
            hours: this.state.hours,
            yearsOfWorking: this.state.yearsOfWorking

        }

        calculateSalary(info).then(res => {
            this.state.money = res;
            return(
                <div>
                    <SideBar/>
                    {this.state.money}
                </div>
            )

        })

    }

    render() {
        return (
            <div className="FormCenter">
                <SideBar/>
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="hours">Wypracowane gpdziny</label>
                        <input type="number" id="hours" className="FormField__Input" placeholder="Podaj godziny" name="hours" value={this.state.hours} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="yearsOfWorking">Lata pracy</label>
                        <input type="number" id="yearsOfWorking" className="FormField__Input" placeholder="Podaj lata pracy" name="yearsOfWorking" value={this.state.yearsOfWorking} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Oblicz</button>
                    </div>

                </form>
            </div>
        );
    }
}
export default SignUpForm;