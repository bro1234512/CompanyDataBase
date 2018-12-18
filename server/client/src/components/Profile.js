import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import {viewProfile} from "./UserFunctions";

class Profile extends Component{
    constructor(){
        super()
        this.state ={
           data: []
        }
    }
    componentDidMount(){

        viewProfile().then(res => {

            this.setState({data: res})
        })
    }

    render(){
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.data.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.data.email}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile;