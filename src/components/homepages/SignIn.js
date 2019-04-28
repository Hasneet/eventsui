import React from 'react';
import { Fields, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import '../../css/SignIn.css';
import { Link } from 'react-router-dom';
//import { signUpAction } from '../../actions';


class SignIn extends React.Component {

    state = {signUpString: 'signup'};

    componentDidMount() {
        
    }

    componentDidUpdate() {
        console.log(this.state.signUpString);
        if(this.state.signUpString === 'signup') {
            document.getElementById('login-link').style.color = "white";
            document.getElementById('signup-link').style.color = "blue";
            console.log(document.getElementById('signup-link'));
        }
        else if(this.state.signUpString === 'login') {
            document.getElementById('signup-link').style.color = "white";
            document.getElementById('login-link').style.color = "blue";
            console.log(document.getElementById('signup-link'))
        }
        
    }

    renderSignUpInput = (formProps) => {
        return (
            <div className="signup-input-container">
                <h3>SignUp For Free</h3>
                <div className="signup-input-content">
                    <label>First Name</label><br></br>
                    <input {...formProps.firstName.input} type="text" autoComplete="off"></input>
                    <label>Last Name</label><br></br>
                    <input {...formProps.lastName.input} type="text" autoComplete="off"></input>
                    <label>Email</label><br></br>
                    <input {...formProps.email.input} type="email" autoComplete="off"></input>
                    <label>Password</label><br></br>
                    <input {...formProps.password.input} type="password" autoComplete="off"></input>
                    <label>Confirm Password</label><br></br>
                    <input {...formProps.password2.input} type="password" autoComplete="off"></input>
                    <button className="ui button primary">SignUp</button>
                </div>
            </div>
        )
    }

    renderLoginInput = (formProps) => {
        return (
            <div className="login-input-container">
                <h3>Welcome Back!</h3>
                <div className="login-input-content">
                    <label>Email</label><br></br>
                    <input {...formProps.email.input} type="email" autoComplete="off"></input>
                    <label>Password</label><br></br>
                    <input {...formProps.password.input} type="password" autoComplete="off"></input>
                    <button className="ui button primary">Login</button>
                </div>
            </div>
        )
    }

    renderSinupForm = () => {
        return (
            <div className="signup-form-container">
                <Fields names={["firstName", "lastName", "email", "password","password2"]} 
                component={this.renderSignUpInput}/>
            </div>
        )
    }

    renderLoginForm = () => {
        
        return (
            <div className="signin-form-container">
                <Fields names={["email", "password"]} component={this.renderLoginInput}/>
            </div>
        )
    }

    validateSignUpString = (signUpString) => {
        if(signUpString === 'signup') {
            // document.getElementById("signup-link").style.color="red";
            return this.renderSinupForm();
        }
        else if(signUpString === 'login') {
            return this.renderLoginForm();
        }   
    }


    render() {
        //console.log(this.props);
        
        return (
            <div className="signin-container">
                <div className="form-wrapper">
                <form className="form">
                    <ul className="tab-group">
                        <li className="tab-active">
                            <Link  id="signup-link" to="/signin" className="link-text" onClick={() => this.setState({signUpString:'signup'})}>Sign Up</Link>
                        </li>
                        <li className="tab">
                            <Link id="login-link" to="/signin" className="link-text" onClick={() => this.setState({signUpString: 'login'})}>Login</Link>
                        </li>
                    </ul>
                    {this.validateSignUpString(this.state.signUpString)}
                </form>
                </div>
            </div>
        )
    };
};

// const mapStateToProps = (state) => {
//     //console.log(state, 'state');
//     return {
//         signUpString: state.signUpString
//     }
// }


//const connectWrapper = connect(mapStateToProps, {signUpAction})(SignIn);

export default reduxForm({
    form: 'signInCreate'
})(SignIn);