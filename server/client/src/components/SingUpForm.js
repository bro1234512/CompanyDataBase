import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { register} from './UserFunctions'
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: ''

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

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            if(res){
                this.props.history.push(`/login`);
                return res;
            }
        })

    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Podaj imię i naziwsko" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Podaj hasło" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Podaj email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button> <Link to="/login" className="FormField__Link">I'm already member</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignUpForm;