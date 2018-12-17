import axios from 'axios';
import { FETCH_USER, FETCH_EMAILS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitEmail = (values) => async dispatch => {
    const res = await axios.post('/api/emails', values);


    dispatch({ type: FETCH_USER, payload: res.data });
};
export const fetchEmails = () => async dispatch => {
    const res = await axios.get('/api/emails');

    dispatch({ type: FETCH_EMAILS, payload: res.data });
};