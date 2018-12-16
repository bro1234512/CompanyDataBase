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
                    {this.state.data.map(el => (
                        <li>
                            {el.mark}: {el.model}
                        </li>
                    ))}
                </ul>



            </div>
        );
    }
}

export default Cars;