import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import {Link} from "react-router-dom";

class SideBar extends Component{
    constructor(){
        super();

    }
    renderContent() {
        if(localStorage.getItem('usertoken') != null ) {


            return(
               <div className="jumbotron mt-5" align="left">

                        <table className="table col-md-6 mx-auto">
                            <tbody>
                            <tr>
                                <Link to="/car" className="FormField__Link">Add Car</Link>
                            </tr>
                            <tr>
                                <Link to="/cars" className="FormField__Link">Show Cars</Link>
                            </tr>
                            </tbody>
                        </table>
                    </div>


            )
        }

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