import React, {Component} from 'react'
import {Link} from "react-router-dom";

class SideBar extends Component{
    constructor(){
        super();

    }
    renderContent() {



            return(
               <div className="collection center" width='300' >
                            <a>
                                <Link to="/emails/new" className="collection-item">Wyślij Email</Link>
                            </a>
                            <a>
                                <Link to="/car" className="collection-item">Dodaj auto</Link>
                            </a>
                            <a>
                                <Link to="/cars" className="collection-item">Wyświetl dostępne auta</Link>
                            </a>
                            <a>
                                <Link to="/findCarByRegistration" className="collection-item">Wyświetl auto podając numer rejestracyjny</Link>
                            </a>
                            <a>
                                <Link to="/deleteCarByRegistration" className="collection-item">Usuń auto podając numer rejestracyjny</Link>
                            </a>
                            <a>
                                <Link to="/driver" className="collection-item">Dodaj kierowce</Link>
                            </a>
                            <a>
                                <Link to="/drivers" className="collection-item">Wyświetl wszystkich kierowców</Link>
                            </a>
                            <a>
                                <Link to="/findDriverBySurname" className="collection-item">Wyświetl kierowce podając nazwisko</Link>
                            </a>

                            <a>
                                <Link to="/deleteDriverBySurname" className="collection-item">Usuń kierowce podając nazwisko</Link>
                            </a>
                            <a>
                                <Link to="/profile" className="collection-item">Wyświetl dane osoby zalogowanej</Link>
                            </a>


                    </div>


            )


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