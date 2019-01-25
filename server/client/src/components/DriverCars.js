import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { showDriverCars} from './UserFunctions'
import * as data from "mongoose";
import SideBar from './SideBar'
class DriverCars extends Component {


    constructor() {
        super();

        this.state = { data: [] };

    }

    componentDidMount(){
        showDriverCars()
            .then(res => this.setState({data: res}))
    }



    render() {
        return (
            <div className="FormCenter">
                <SideBar/>
                <ul>
                    <table>
                        <tr>
                            <td>RegistrationNumber</td>
                            <td>Email</td>

                        </tr>

                        {this.state.data.map(el => (
                            <tr>
                                <td>{el.registrationNumber}</td>
                                <td>{el.email}</td>

                            </tr>
                        ))}
                    </table>
                </ul>



            </div>
        );
    }
}

export default DriverCars;