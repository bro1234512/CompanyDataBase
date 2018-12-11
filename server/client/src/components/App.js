import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const DashBoard = () => <h2>DashBoard</h2>
const Survey = () => <h2>Survey</h2>


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
    return(
        <div>
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={DashBoard} />
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/surveynew" component={Survey} />
                </div>
            </BrowserRouter>
        </div>
    );
    }
};
export default connect(null, actions)(App);