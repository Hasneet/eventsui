import React from 'react';
import Selectors from './Selectors';
import Recommended from './Recommended';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Selectors/>
                <Recommended/>
            </div>
        )
    };
};

export default Home;