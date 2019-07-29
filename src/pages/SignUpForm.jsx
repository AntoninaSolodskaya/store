import React, { Component } from "react";
import { MDBBtn, MDBInput } from "mdbreact";

class SignUpForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <p className="h5 text-center mb-4">Sign up</p>
          <div className="grey-text">
            <MDBInput
              label="Your name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Your email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Confirm your email"
              icon="exclamation-triangle"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Your password"
              icon="lock"
              group
              type="password"
              validate
            />
          </div>
          <div className="text-center">
            <MDBBtn color="primary">Register</MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
