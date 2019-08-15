import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import CustomInput from "../form/CustomInput";

class LoginForm extends Component {
  render() {
    return (
      <div className="modal-wrap">
        <MDBCard className="mx-4">
          <MDBCardBody className="mx-4">
            <form>
              <div className="text-center">
                <h3 className="teal-text">
                  <strong>Sign in</strong>
                </h3>
              </div>

              <Field
                name="email"
                label="Your email"
                type="text"
                component={CustomInput}
                icon="envelope"
                iconClass="grey-text"
              />
              <Field
                name="password"
                label="Your password"
                type="password"
                component={CustomInput}
                icon="unlock-alt"
                iconClass="grey-text"
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
                  <MDBIcon
                    fab
                    icon="google"
                    className="blue-text text-center"
                  />
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default withRouter(reduxForm({ form: "login" })(LoginForm));
