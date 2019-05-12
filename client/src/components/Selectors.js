import React from 'react';
import '../css/Search.css';
import { connect } from 'react-redux';
import { fetchLocations, fetchEvents } from '../actions';

class Selectors extends React.Component {

    componentDidMount() {
        this.props.fetchLocations();
        this.props.fetchEvents();
    }

    render() {
        return (
            <div className="search-top" id="search-top">
                <div className="ui grid center aligned">
                    <div className="three wide column">
                    <h3 className="ui huge header">Location</h3>
                        <select className="ui fluid dropdown">
                            {this.props.locations.map((location, index) => {
                                return (
                                    <option key={index} value={`L${index}`}>{location}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="three wide column">
                    <h3 className="ui huge header">Event</h3>
                    <select className="ui fluid dropdown">
                        {this.props.events.map((event, index) => {
                            return (
                                <option key={index} value={`E${index}`}>{event}</option>
                            )
                        })}        
                    </select>
                    </div>

                    <div className="three wide column">
                        <button className="ui secondary button" style={{marginTop:'47px'}}>Find Venue</button>
                        <button className="ui primary button">Filter</button>
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {locations: state.locations, events: state.events};
}

export default connect(mapStateToProps, {fetchLocations, fetchEvents})(Selectors);