import { SIGNUP_ACTION } from '../actions/types';

export default (state = 'signup', action) => {
    switch(action.type) {
        case SIGNUP_ACTION: return action.paylaod;
        default : return state;
    }
}