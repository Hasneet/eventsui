import { combineReducers } from 'redux';
import LocationsReducer from './LocationsReducer';
import EventsReducer from './EventsReducer';

export default combineReducers({
    locations: LocationsReducer,
    events: EventsReducer
})