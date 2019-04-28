import {FETCH_LOCATIONS, FETCH_EVENTS, SIGNUP_ACTION} from './types';

export const fetchLocations = () => async (dispatch, getState) => {
    // const response = await call
    dispatch({type: FETCH_LOCATIONS, payload: ['locations response']});
}

export const fetchEvents = () => async (dispatch, getState) => {
    //const respone = await call
    dispatch({type: FETCH_EVENTS, payload: ['events response']});
}

// export const signUpAction = (data) => (dispatch) => {
//     console.log(data);
//     return dispatch({type: SIGNUP_ACTION, payload: data});
// }