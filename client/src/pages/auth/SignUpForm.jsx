import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import CustomInput from "../form/CustomInput";

class SignUpForm extends Component {
  render() {
    return (
      <div className="modal-wrap">
        <MDBCard className="mx-4" style={{ width: "60%" }}>
          <MDBCardBody className="mx-4">
            <form>
              <div className="text-center">
                <h3 className="teal-text mb-5">
                  <strong>Sign up</strong>
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
                group
                type="password"
                component={CustomInput}
                icon="unlock-alt"
                iconClass="grey-text"
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
            </form>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default reduxForm({ form: "register" })(SignUpForm);
