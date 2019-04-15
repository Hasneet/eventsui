import React from 'react';
import Header from './Header';
import SlideShow from './SlideShow';
import Recommended from './Recommended';
import Footer from './Footer'

class App extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <Recommended/>
                <Footer/>
               
            </div>
            
        )
    };
};

export default App;