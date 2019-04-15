export default (state = ['no data'], action) => {
    switch(action.type) {
        case 'FETCH_LOCATIONS': {
            return action.payload;
        }
        default: return state;
    }
}