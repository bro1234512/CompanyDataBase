import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import allCars from './carsReducer';
import emailsReducer from './emailsReducer';

export default combineReducers({
    auth: authReducer,
    allCarsToDisplay: allCars,
    form: reduxForm,
    emails: emailsReducer
});

