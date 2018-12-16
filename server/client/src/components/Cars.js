import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { showCars} from './UserFunctions'
import * as data from "mongoose";
import SideBar from './SideBar'
class Cars extends Component {


    constructor() {
        super();

        this.state = { data: [] };

    }

    componentDidMount(){
            showCars()
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
                            <td>mark</td>
                            <td>model</td>
                            <td>ageGroup</td>
                            <td>carReviewTerm</td>
                        </tr>

                    {this.state.data.map(el => (
                        <tr>
                            <td>{el.registrationNumber}</td>
                            <td>{el.mark}</td>
                            <td>{el.model}</td>
                            <td>{el.ageGroup}</td>
                            <td>{el.carReviewTerm}</td>
                        </tr>
                    ))}
                    </table>
                </ul>



            </div>
        );
    }
}

export default Cars;