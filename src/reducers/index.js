import { combineReducers } from 'redux';
import LocationsReducer from './LocationsReducer';
import EventsReducer from './EventsReducer';
import SignUpReducer from './SignUpReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    locations: LocationsReducer,
    events: EventsReducer,
    // signUpString: SignUpReducer,
    form: formReducer
})