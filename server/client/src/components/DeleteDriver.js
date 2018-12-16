import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {deleteDriver} from './UserFunctions'
import SideBar from './SideBar'
class DeleteDriver extends Component {
    constructor() {
        super();

        this.state = {
            surname: ''

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

        deleteDriver(driver).then(res => {
            this.props.history.push(`/drivers`);
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
                        <input type="surname" id="surname" className="FormField__Input" placeholder="Enter driver's surname" name="surname" value={this.state.surname} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button  className="FormField__Button mr-20">Delete</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default DeleteDriver;