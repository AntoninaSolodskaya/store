import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
} from "mdbreact";

class SignUpForm extends Component {
  render() {
    return (
      <div className="modal-wrap">
        <MDBCard className="mx-4">
          <MDBCardBody className="mx-4">
            <div className="text-center">
              <h3 className="teal-text mb-5">
                <strong>Sign up</strong>
              </h3>
            </div>
            <MDBInput
              label="Your email"
              group
              type="text"
              icon="envelope"
              iconClass="grey-text"
              validate
            />
            <MDBInput
              label="Your password"
              group
              type="password"
              icon="unlock-alt"
              iconClass="grey-text"
              validate
            />
            <MDBRow className="d-flex align-items-center mb-4">
              <MDBCol md="6" className="text-center">
                <MDBBtn type="button" className="btn btn-default z-depth-1">
                  Sign up
                </MDBBtn>
              </MDBCol>
              <MDBCol md="6">
                <p className="font-small grey-text d-flex justify-content-end">
                  Have an account?
                  <Link to="/login" className="blue-text">
                    Log in
                  </Link>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default SignUpForm;
