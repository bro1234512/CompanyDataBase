// EmailFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const EmailFormReview = ({ onCancel, formValues, submitEmail, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Sprawdź treść przed wysłaniem !!!</h5>
            {reviewFields}
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}
            >
                Wróć
            </button>
            <button
                onClick={() => submitEmail(formValues, history)}
                className="green btn-flat right white-text"
            >
                Wyślij Email
                <i className="material-icons right"></i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.emailForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(EmailFormReview));