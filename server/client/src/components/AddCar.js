import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addCar} from './UserFunctions'
import SideBar from './SideBar'
class AddCar extends Component {
    constructor() {
        super();

        this.state = {
            registrationNumber: '',
            mark: '',
            model: '',
            ageGroup: '',
            carReviewTerm: '',

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

        const car = {

            registrationNumber: this.state.registrationNumber,
            mark: this.state.mark,
            model: this.state.model,
            ageGroup: this.state.ageGroup,
            carReviewTerm: this.state.carReviewTerm
        }

        addCar(car).then(res => {
            if(res){
                this.props.history.push(`/cars`);
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
                        <label className="FormField__Label" htmlFor="registrationNumber">Registration Number</label>
                        <input type="text" id="registrationNumber" className="FormField__Input" placeholder="Enter registration number" name="registrationNumber" value={this.state.registrationNumber} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="mark">Mark</label>
                        <input type="text" id="mark" className="FormField__Input" placeholder="Enter mark" name="mark" value={this.state.mark} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="model">Model</label>
                        <input type="text" id="model" className="FormField__Input" placeholder="Enter model" name="model" value={this.state.model} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="ageGroup">Age Group</label>
                        <input type="number" id="ageGroup" className="FormField__Input" placeholder="Enter ageGroup" name="ageGroup" value={this.state.ageGroup} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="carReviewTerm">Registration Number</label>
                        <input type="date" id="carReviewTerm" className="FormField__Input" placeholder="Enter carReviewTerm" name="carReviewTerm" value={this.state.carReviewTerm} onChange={this.handleChange} />
                    </div>
                        <button className="FormField__Button mr-20">Add</button>

                </form>
            </div>
        );
    }
}
export default AddCar;