import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";

class LoginForm extends Component {
  render() {
    return (
      <div className="modal-wrap">
        <MDBCard className="mx-4">
          <MDBCardBody className="mx-4">
            <div className="text-center">
              <h3 className="teal-text">
                <strong>Sign in</strong>
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
                  Sign in
                </MDBBtn>
              </MDBCol>
              <MDBCol md="6">
                <div className="font-weight-light">
                  <p className="grey-text">
                    Not a member?<Link to="/register">Sign Up</Link>
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
            <p className="text-center pb-3">or Sign in with:</p>
            <div className="row my-3 d-flex justify-content-center">
              <MDBBtn
                type="button"
                color="white"
                className="mr-md-3 z-depth-1a"
                style={{ borderRadius: "25px" }}
              >
                <MDBIcon
                  fab
                  icon="facebook-f"
                  className="blue-text text-center"
                />
              </MDBBtn>
              <MDBBtn
                type="button"
                color="white"
                className="mr-md-3 z-depth-1a"
                style={{ borderRadius: "25px" }}
              >
                <MDBIcon fab icon="google" className="blue-text text-center" />
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default withRouter(LoginForm);
