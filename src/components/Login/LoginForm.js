import React, { Component } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    let isValid = true;

    if (!this.state.email || !this.state.email.includes('@')) {
      this.setState({
        emailError: 'Invalid email',
      });
      isValid = false;
    } else {
      this.setState({
        emailError: '',
      });
    }

    if (this.state.password.length < 6) {
      this.setState({
        passwordError: 'Password must be at least 6 characters',
      });
      isValid = false;
    } else {
      this.setState({
        passwordError: '',
      });
    }

    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      // Perform form submission logic here
    }
  };

  render() {
    return (
      <div className="main">
        <form onSubmit={this.handleSubmit} className="form" id="form-1">
          <h3 className="heading">Login</h3>
          <div className="spacer"></div>

          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
               Username
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Username"
              className="form-control"
              value={this.state.fullname}
              onChange={this.handleInputChange}
            />
            <span className="form-message">{this.state.fullnameError}</span>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="enter your password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <span className="form-message">{this.state.passwordError}</span>
          </div>

          {/* ... Other form elements */}
          <button className="submit" id="signup-button" type="submit">
            Login
          </button>
          <br />
          <br />
          <Link to='/Signup'>
            <strong>  Don't have an account?</strong>
          </Link>
          <p>
            <span className="btn-round">or</span>
          </p>

          {/* Social media buttons */}
          <div className="social-logins">
            <div className="facebook-login login-button">
              <i className="fa fa-facebook">&nbsp;&nbsp;&nbsp;</i>
              <span>Login with Facebook</span>
            </div>
            <div className="google-login login-button">
              <i className="fa fa-google">&nbsp;&nbsp;&nbsp;</i>
              <span>Login with Google</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
