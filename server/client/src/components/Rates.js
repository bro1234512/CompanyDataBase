import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { showRates} from './UserFunctions'
import * as data from "mongoose";
import SideBar from './SideBar'
class Rates extends Component {


    constructor() {
        super();

        this.state = { data: [] };

    }

    componentDidMount(){
        showRates()
            .then(res => this.setState({data: res}))
    }



    render() {
        return (
            <div className="FormCenter">
                <SideBar/>
                <ul>
                    <table>
                        <tr>
                            <td>Rates</td>

                        </tr>

                        {this.state.data.map(el => (
                            <tr>
                                <td>{el.rate}</td>

                            </tr>
                        ))}
                    </table>
                </ul>



            </div>
        );
    }
}

export default Rates;