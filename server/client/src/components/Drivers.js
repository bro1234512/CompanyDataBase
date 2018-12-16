import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { showDrivers} from './UserFunctions'
import * as data from "mongoose";
import SideBar from './SideBar'
class Drivers extends Component {


    constructor() {
        super();

        this.state = { data: [] };

    }

    componentDidMount(){
        showDrivers()
            .then(res => this.setState({data: res}))
    }



    render() {
        return (
            <div className="FormCenter">
                <SideBar/>
                <ul>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>Surname</td>
                            <td>birthdayDate</td>
                            <td>carLicenseTerm</td>
                            <td>email</td>
                        </tr>

                        {this.state.data.map(el => (
                            <tr>
                                <td>{el.name}</td>
                                <td>{el.surname}</td>
                                <td>{el.birthdayDate}</td>
                                <td>{el.carLicenseTerm}</td>
                                <td>{el.email}</td>
                            </tr>
                        ))}
                    </table>
                </ul>



            </div>
        );
    }
}

export default Drivers;