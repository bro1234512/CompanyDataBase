import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {addCar, addRate} from './UserFunctions'
import SideBar from './SideBar'
class Rate extends Component {
    constructor() {
        super();

        this.state = {
            rate:''

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

        const rating = {

            rate:this.state.rate
        }

        addRate(rating).then(res => {
            if(res){
                this.props.history.push(`/ratings`);
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
                        <label className="FormField__Label" htmlFor="rate">Ocena</label>
                        <input type="text" id="rate" className="FormField__Input" placeholder="Podaj ocene" name="rate" value={this.state.rate} onChange={this.handleChange} />
                    </div>

                    <button className="FormField__Button mr-20">Add</button>

                </form>
            </div>
        );
    }
}
export default Rate;