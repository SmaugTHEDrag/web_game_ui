import React, { Component } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      password: '',
      password_confirmation: '',
      fullnameError: '',
      emailError: '',
      passwordError: '',
      password_confirmationError: '',
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

    if (!this.state.fullname) {
      this.setState({
        fullnameError: 'Enter your name',
      });
      isValid = false;
    } else {
      this.setState({
        fullnameError: '',
      });
    }

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

    if (this.state.password !== this.state.password_confirmation) {
      this.setState({
        password_confirmationError: 'Passwords do not match',
      });
      isValid = false;
    } else {
      this.setState({
        password_confirmationError: '',
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
          <h3 className="heading">SIGN UP</h3>
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
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="VD: email@domain.com"
              className="form-control"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <span className="form-message">{this.state.emailError}</span>
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

          <div className="form-group">
            <label htmlFor="password_confirmation" className="form-label">
              Confirm password
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              placeholder="re-enter password"
              type="password"
              className="form-control"
              value={this.state.password_confirmation}
              onChange={this.handleInputChange}
            />
            <span className="form-message">
              {this.state.password_confirmationError}
            </span>
          </div>

          {/* Other form elements */}
          <button className="submit" id="signup-button" type="submit">
            SIGN UP
          </button>
          <br />
          <br />
          <Link to='/Login'>
            <strong> Already have an account?</strong>
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

export default SignupForm;
