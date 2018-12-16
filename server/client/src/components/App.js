import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import SingUpForm from './SingUpForm'
import Header from './Header';
import Landing from './Landing';
import SingInForm from './SingInForm';
import Profile from './Profile';
import EmailNew from "./emails/EmailNew";
import Dashboard from "./Dashboard";



class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
    return(
        <div className="container">
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/register" component={SingUpForm} />
                    <Route exact path="/login" component={SingInForm} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/emails/new" component={EmailNew} />
                </div>
            </BrowserRouter>
        </div>
    );
    }
};
export default connect(null, actions)(App);