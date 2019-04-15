export const fetchLocations = () => async (dispatch, getState) => {
    // const response = await call
    dispatch({type: 'FETCH_LOCATIONS', payload: ['locations response']});
}

export const fetchEvents = () => async (dispatch, getState) => {
    //const respone = await call
    dispatch({type: 'FETCH_EVENTS', payload: ['events response']});
}