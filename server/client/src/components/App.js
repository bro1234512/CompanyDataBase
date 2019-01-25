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
import FindDriver from "./FindDriver"
import DeleteDriver from "./DeleteDriver"
import DeleteCar from "./DeleteCar"
import DriverToCar from "./DriverToCar"
import DriverToCars from "./DriverCars"
import CalculateSalary from "./CalculateSalary"
import Rate from "./Rate"
import Rates from "./Rates"
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
                    <Route exact path="/mainpage" component={SideBar} />
                    <Route exact path="/cars" component={Cars} />
                    <Route exact path="/car" component={AddCar} />
                    <Route exact path="/findCarByRegistration" component={FindCar} />
                    <Route exact path="/deleteCarByRegistration" component={DeleteCar} />
                    <Route exact path="/deleteDriverBySurname" component={DeleteDriver} />
                    <Route exact path="/drivers" component={Drivers} />
                    <Route exact path="/driver" component={AddDriver} />
                    <Route exact path="/login" component={SingInForm} />
                    <Route exact path="/findDriverBySurname" component={FindDriver} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/emails/new" component={EmailNew} />
                    <Route exact path="/driverToCar" component={DriverToCar} />
                    <Route exact path="/driverToCars" component={DriverToCars} />
                    <Route exact path="/calculatesalary" component={CalculateSalary} />
                    <Route exact path="/rating" component={Rate} />
                    <Route exact path="/ratings" component={Rates} />

                </div>
            </BrowserRouter>
        </div>
    );
    }
};
export default connect(null, actions)(App);