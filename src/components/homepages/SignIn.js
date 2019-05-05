import React from 'react';
import { Fields, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import '../../css/SignIn.css';
import { Link } from 'react-router-dom';
//import { signUpAction } from '../../actions';
let localSignUpString = '';

class SignIn extends React.Component {

    state = {signUpString: 'signup'};

    componentDidMount() {
        
    }

    componentDidUpdate() {
        console.log('inside comp. update')
        //console.log(this.state.signUpString);
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

    renderError = (meta) => {
        console.log(meta, 'meta')
        if(meta.touched && meta.error) {
            console.log(meta.error)
            return (
                <div>
                    <div style={{color: "white"}}>{meta.error}</div>
                </div>
            )
        }
    }

    renderSignUpInput = (formProps) => {
        console.log('---inside signupInput---')
        console.log(formProps);
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
                   {this.renderError(formProps.firstName.meta)}
                   

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

    renderSignupForm = () => {
        //console.log('---inside renderSignupForm---')
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
            localSignUpString = signUpString;
            console.log(localSignUpString, '---inside validateSignUpString---')
            return this.renderSignupForm();
        }
        else if(signUpString === 'login') {
            localSignUpString = signUpString;
            return this.renderLoginForm();
        }   
    }

    onSubmit = (formValues) => {
        console.log('called onSubmit from SignIn', formValues);
    }


    render() {
        //console.log(this.props);
        
        return (
            <div className="signin-container">
                <div className="form-wrapper">
                <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <ul className="tab-group">
                        <li className="tab-active">
                            <Link  id="signup-link" to="/signin" className="link-text" onClick={() => this.setState({signUpString:'signup'})}>Sign Up</Link>
                        </li>
                        <li className="tab">
                            <Link id="login-link" to="/signin" className="link-text" onClick={() => this.setState({signUpString: 'login'})}>Login</Link>
                        </li>
                    </ul>
                    {this.validateSignUpString(this.state.signUpString)
                    }
                
                </form>
                </div>
            </div>
        )
    };
};

const validate = (formValues) => {
    //console.log(formValues, '---inisde validate ---')
    let errors = {};
    if(localSignUpString === 'signup') {
        let emailValidater = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!formValues.firstName) errors.firstName = 'You must enter your first name.';
        if(!formValues.lastName) errors.lastName = 'You must enter your last name.';
        if(!formValues.email) errors.email = 'You must enter enter an email.';
        
        if(formValues.email) {
            if(!emailValidater.test(formValues.email.toLowerCase())) errors.email = 'Please enter a valid email.';
        }
        if(!formValues.password) errors.password = 'You must enter a password.';
        if(!formValues.password2) errors.password2 = 'You must confirm your password.';
        
        if(formValues.password) {
            if(!formValues.password.length >= 8) errors.passwordLength = 'Passwod must be at least 8 characters.';
        }
        if(formValues.password!==formValues.password2) errors.mismatch = 'Passwords do not match.';
    }
    else if(localSignUpString === 'login') {
        let emailValidater = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!formValues.email) errors.email = 'Please enter your email.';
        if(formValues.email) {
            if(!emailValidater.test(formValues.email.toLowerCase())) errors.email = 'Please enter a valid email.';
        }
        if(!formValues.password) errors.password = 'Please enter your password.';
    }
    return errors;
}

// const mapStateToProps = (state) => {
//     //console.log(state, 'state');
//     return {
//         signUpString: state.signUpString
//     }
// }


//const connectWrapper = connect(mapStateToProps, {signUpAction})(SignIn);

export default reduxForm({
    form: 'signInCreate',
    validate
})(SignIn);