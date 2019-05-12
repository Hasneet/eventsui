import React from 'react';
//import '../css/homepage.css';
import '../css/Header.css';
import { Link } from 'react-router-dom';



class Header extends React.Component {
  

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.lastScroll = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleScroll = event => {
    //console.log(event);
    // console.log(event.srcElement.documentElement.scrollTop);
    // console.log(this.lastScroll);
    if (this.lastScroll > event.srcElement.documentElement.scrollTop) {
      //console.log('scrolling up');
      this.lastScroll = event.srcElement.documentElement.scrollTop;
      document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";

    }
    else {
      this.lastScroll = event.srcElement.documentElement.scrollTop;
      //console.log('scrolling down');
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("logo").style.fontSize = "25px";
    }
  }


  render() {
    return (
      <div className="top">
        <div className="navbar" id="navbar">
          <Link className="logo" id="logo" to="/">Company Logo</Link>
          <div className="navbar-right" id="navbar-right">
            <Link classnames="active" to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/signin">Sign-in</Link>
          </div>
        </div>
      </div>
    )
  };
};



export default Header;