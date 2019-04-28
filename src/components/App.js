import React from 'react';
import Header from './Header';
import Footer from './Footer'
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Home from './Home';
import SignIn from './homepages/SignIn';
import '../css/App.css';

class App extends React.Component {

    render() {
        return(
           <Router history={history}>
                <Header/>
                 <div className="app-container">
                    <div className="main">
                            <Route path='/' exact component={Home}/>
                            <Route path='/signin' component={SignIn}/>
                       
                    </div>
                </div>
                <Footer/>
           </Router>
            
        )
    };
};

export default App;