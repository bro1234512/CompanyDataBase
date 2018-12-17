import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {findDriver} from './UserFunctions'
import SideBar from './SideBar'
class FindDriver extends Component {
    constructor() {
        super();

        this.state = {
            surname: '',
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

        const driver = {
            surname: this.state.surname

        }

        findDriver(driver).then(res => {
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
                        <label className="FormField__Label" htmlFor="surname">Surname</label>
                        <input type="surname" id="surname" className="FormField__Input" placeholder="Podaj nazwisko" name="surname" value={this.state.surname} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button  className="FormField__Button mr-20">Find</button>
                    </div>
                    <div>
                        <ul>

                            <table>
                                <tr>
                                    <td>Name</td>
                                    <td>Surname</td>
                                    <td>birthdayDate</td>
                                    <td>carLicenseTerm</td>
                                    <td>email</td>
                                </tr>


                                    <tr>
                                        <td>{this.state.data.name}</td>
                                        <td>{this.state.data.surname}</td>
                                        <td>{this.state.data.birthdayDate}</td>
                                        <td>{this.state.data.carLicenseTerm}</td>
                                        <td>{this.state.data.email}</td>
                                    </tr>

                            </table>

                        </ul>
                    </div>
                </form>
            </div>
        );
    }
}

export default FindDriver;