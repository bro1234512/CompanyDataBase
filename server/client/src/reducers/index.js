import {combineReducers} from 'redux';
import authReducer from './authReducer';
import allCars from './carsReducer';
export default combineReducers({
    auth: authReducer,
    allCarsToDisplay: allCars
});

