import axios from 'axios';
import {FETCH_USER} from "./types";
import {FETCH_CARS} from "./types";

export const fetchUser = () => async dispatch =>{
    const res = await axios.get('/api/current_user');

            dispatch({type: FETCH_USER, payload: res.data });
    };

export const fetchCars = () => async dispatch =>{
    const res = await axios.get('/car/showCars');

    dispatch({type: FETCH_CARS, payload: res.data });
};
