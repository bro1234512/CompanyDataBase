// EmailNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import EmailForm from './EmailForm';
import EmailFormReview from './EmailFormReview';

class EmailNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <EmailFormReview
                    onCancel={() => this.setState({ showFormReview: false })}
                />
            );
        }

        return (
            <EmailForm
                onEmailSubmit={() => this.setState({ showFormReview: true })}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'emailForm'
})(EmailNew);