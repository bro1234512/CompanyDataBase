import React from 'react';
import { Link } from 'react-router-dom';
import EmailList from './emails/EmailList';


const Dashboard = () => {
    return (
        <div className='container'>
            <EmailList/>
            <div className="fixed-action-btn ">
                <Link to="/emails/new" className="left-align waves-effect waves-light btn">
                    <i class="material-icons">email</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;