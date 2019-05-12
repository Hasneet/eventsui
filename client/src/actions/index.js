import {FETCH_LOCATIONS, FETCH_EVENTS, SIGNUP_ACTION} from './types';
import axios from 'axios';

export const fetchLocations = () => async (dispatch, getState) => {
    // const response = await call
    dispatch({type: FETCH_LOCATIONS, payload: ['locations response']});
}

export const fetchEvents = () => async (dispatch, getState) => {
    //const respone = await call
    dispatch({type: FETCH_EVENTS, payload: ['events response']});
}

export const signUpAction = (data) => async (dispatch) => {
    //console.log(data);
    let payload = {}
    payload.firstName = data.firstName;
    payload.lastName = data.lastName;
    payload.email = data.email;
    payload.password = data.password;
    payload.userType = 'C';
    payload.exp = Math.floor(Date.now() / 1000) + (60*3600);
    //let token = jwt.sign(payload, 'my-secret');
    //console.log(token, '---token---');
    let result = await axios.post('/serverBase/signUp', {
        "userPayload": payload
    });
    //let result = await axios.post('https://dynamic-bongo-236518.appspot.com/rest/home', token)
    console.log(result, '---inside signUpAction---')
    return dispatch({type: SIGNUP_ACTION, payload: result});
}