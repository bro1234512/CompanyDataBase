// EmailForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import EmailField from './EmailField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class EmailForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={EmailField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onEmailSubmit)}>
                    {this.renderFields()}
                    <Link to="/sidebar" className="red btn-flat white-text">
                        Anuluj
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Przejdź do sprawdzenia
                        <i className="material-icons right"></i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'Musisz wprowadzić dane !!!';
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'emailForm',
    destroyOnUnmount: false
})(EmailForm);