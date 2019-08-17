import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import { login } from "../../auth/authActions";
import CustomInput from "../form/CustomInput";

const mapState = state => ({
  auth: state.auth
});

const actions = {
  login
};

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Password should be at least 6 characters long";
  }
  return errors;
};

class LoginForm extends Component {

  render() {
    const { login, pristine, handleSubmit, submitting, auth } = this.props;
    const isErr = auth.isErr;
    return (
      <div className="modal-wrap">
        <MDBCard className="mx-4">
          <MDBCardBody className="mx-4">
            <form onSubmit={handleSubmit(login)}>
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
              {isErr && <span>Wrong password or email</span>}
              <MDBRow className="d-flex align-items-center mb-4">
                <MDBCol md="6" className="text-center">
                  <MDBBtn type="submit" disabled={pristine || submitting} className="btn btn-default z-depth-1">
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

export default withRouter(
  connect(
    mapState,
    actions
  )(reduxForm({ form: "login", validate })(LoginForm))
);
