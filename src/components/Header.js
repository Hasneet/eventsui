import React from 'react';
//import '../css/homepage.css';
import Selectors from './Selectors';
import '../css/Header.css';



class Header extends React.Component {

  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.lastScroll = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, {passive: true})
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleScroll = event => {
    console.log(event);
    // console.log(event.srcElement.documentElement.scrollTop);
    // console.log(this.lastScroll);
    if(this.lastScroll > event.srcElement.documentElement.scrollTop) {
      console.log('scrolling up');
      this.lastScroll = event.srcElement.documentElement.scrollTop;
      document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
      
    }
    else {
      this.lastScroll = event.srcElement.documentElement.scrollTop;
      console.log('scrolling down');
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("logo").style.fontSize = "25px";
    }
  }


  render() {
    return (
      <div className="top">
        <div className="navbar" id="navbar">
          <a className="logo" id="logo" href="#default">Company Logo</a>
          <div className="navbar-right" id="navbar-right">
            <a classnames="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="#signin">Sign-in</a>
          </div>
        </div>
        <Selectors/>
      </div>
    )
  };
};



export default Header;