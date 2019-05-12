export default (state = ['no event data'], action) => {
    switch(action.type) {
        case 'FETCH_EVENTS': {
            return action.payload;
        }
        default: return state;
    }
}