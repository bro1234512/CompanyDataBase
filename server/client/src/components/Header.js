import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class Header extends Component{

    renderContent(){
        var log;
        if(localStorage.getItem('usertoken') == null){
           log = true;
        }
        else {
            log = false;
        }
        switch(this.props.auth){
            case null:
                return '';
            case false:
                if(log) {
                    return (
                        <div>
                            <li><a href="/auth/google">Login With Google</a></li>
                            <li><a href="/register" onClick="return logChange();" >Register </a></li>
                        </div>
                    );
                }
                break;
            default:

               return <div>
                   <script type="text/javascript">
                       logChange(){
                       localStorage.removeItem('usertoken')
                   }

                   </script>
               <li><a href="/api/logout" onClick="return logChange();">Logout</a></li>
               </div>
        }
    }
    render(){

        return(
            <nav>
                <div className=" blue nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Company Datebase
                    </Link>

                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
function mapStateToProps({auth}){
    return {auth};
}
export default connect(mapStateToProps)(Header);