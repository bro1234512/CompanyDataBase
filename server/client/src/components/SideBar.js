import React, {Component} from 'react'
import {Link} from "react-router-dom";

class SideBar extends Component{
    constructor(){
        super();

    }
    renderContent() {
        //if(localStorage.getItem('usertoken') != null ) {


            return(
               <div className="jumbotron mt-5" align="left">

                        <table className="table col-md-6 mx-auto">
                            <tbody>
                            <tr>
                                <Link to="/emails/new" className="FormField__Link">Wyślij Email</Link>
                            </tr>
                            <tr>
                                <Link to="/car" className="FormField__Link">Dodaj auto</Link>
                            </tr>
                            <tr>
                                <Link to="/cars" className="FormField__Link">Wyświetl dostępne auta</Link>
                            </tr>
                            <tr>
                                <Link to="/findCarByRegistration" className="FormField__Link">Wyświetl auto podając numer rejestracyjny</Link>
                            </tr>
                            <tr>
                                <Link to="/driver" className="FormField__Link">Dodaj kierowce</Link>
                            </tr>
                            <tr>
                                <Link to="/drivers" className="FormField__Link">Wyświetl wszystkich kierowców</Link>
                            </tr>
                            <tr>
                                <Link to="/findDriverBySurname" className="FormField__Link">Wyświetl kierowce podając nazwisko</Link>
                            </tr>
                            <tr>
                                <Link to="/deleteDriverBySurname" className="FormField__Link">Usuń kierowce podając nazwisko</Link>
                            </tr>
                            </tbody>
                        </table>
                    </div>


            )
       // }

    }


    render(){
        return(
            <div className="container">
                {this.renderContent()}
            </div>
        )
    }
}

export default SideBar;