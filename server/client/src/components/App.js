import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import SingUpForm from './SingUpForm'
import Header from './Header';
import Landing from './Landing';
import SingInForm from './SingInForm';
import Profile from './Profile';
import SideBar from './SideBar'
import Cars from './Cars'
import AddCar  from './AddCar'
import FindCar from "./FindCar"
import Drivers from './Drivers'
import AddDriver  from './AddDriver'
import EmailNew from "./emails/EmailNew";
import Dashboard from "./Dashboard";
import FindDriver from "./FindDriver"
import DeleteDriver from "./DeleteDriver"




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
                    <Route exact path="/surveys" component={SideBar} />
                    <Route exact path="/cars" component={Cars} />
                    <Route exact path="/car" component={AddCar} />
                    <Route exact path="/findCarByRegistration" component={FindCar} />
                    <Route exact path="/deleteDriverBySurname" component={DeleteDriver} />
                    <Route exact path="/drivers" component={Drivers} />
                    <Route exact path="/driver" component={AddDriver} />
                    <Route exact path="/login" component={SingInForm} />
                    <Route exact path="/findDriverBySurname" component={FindDriver} />
                    <Route exact path="/cos" component={Dashboard} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/emails/new" component={EmailNew} />
                </div>
            </BrowserRouter>
        </div>
    );
    }
};
export default connect(null, actions)(App);