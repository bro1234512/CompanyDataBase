import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEmails } from '../../actions';

class EmailList extends Component {
    componentDidMount() {
        this.props.fetchEmails();
    }

    renderEmails() {
        return this.props.emails.reverse().map(email => {
            return (
                <div className="card darken-1" key={email._id}>
                    <div className="card-content">
                        <span className="card-title">{email.title}</span>
                        <p>
                            {email.body}
                        </p>
                        <p className="right">
                            Sent On: {new Date(email.dateSent).toLocaleDateString()}
                        </p>
                    </div>

                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderEmails()}
            </div>
        );
    }
}

function mapStateToProps({ emails }) {
    return { emails };
}

export default connect(mapStateToProps, { fetchEmails })(EmailList);