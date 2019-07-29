import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { MDBInput, MDBBtn } from "mdbreact";

class LoginForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <p className="h5 text-center mb-4">Sign in</p>
          <div className="grey-text">
            <MDBInput
              label="Type your email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Type your password"
              icon="lock"
              group
              type="password"
              validate
            />
          </div>
          <div className="text-center">
            <MDBBtn>Login</MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
