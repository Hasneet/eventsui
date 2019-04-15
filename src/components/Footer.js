import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {

    render() {

        return(
            <div className="footer-container">
                <div className="footer">
                    <div className="contain">
                        <div className="col">
                            <h1>Company</h1>
                            <ul>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Products</h1>
                            <ul>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Accounts</h1>
                            <ul>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Resources</h1>
                            <ul>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Support</h1>
                            <ul>
                                <li>Contact us</li>
                                <li>Web chat</li>
                                <li>Open ticket</li>
                            </ul>
                        </div>
                        <div className="col social">
                            <h1>Social</h1>
                            <ul>
                                <li>
                                    <img alt="" src="https://svgshare.com/i/5fq.svg" style={{width: '32px'}}></img>
                                </li>
                                <li>
                                    <img alt="" src="https://svgshare.com/i/5fq.svg" style={{width: '32px'}}></img>
                                </li>
                                <li>
                                    <img alt="" src="https://svgshare.com/i/5fq.svg" style={{width: '32px'}}></img>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Footer;