import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import emailsReducer from './emailsReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    emails: emailsReducer
});