import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import CustomInput from "../form/CustomInput";
import { connect } from "react-redux";
import { registerUser } from "../../auth/authActions";

const mapState = state => ({
  auth: state.auth
});

const actions = {
  registerUser
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


class SignUpForm extends Component {

  render() {
    const { registerUser, pristine, handleSubmit, submitting, auth } = this.props;
    const isErr = auth.isErr;
    return (
      <div className="modal-wrap">
        <MDBCard className="mx-4" style={{ width: "60%" }}>
          <MDBCardBody className="mx-4">
            <form onSubmit={handleSubmit(registerUser)}>
              <div className="text-center">
                <h3 className="teal-text mb-5">
                  <strong>Sign up</strong>
                </h3>
              </div>
              <Field
                name="name"
                label="Your name"
                type="text"
                component={CustomInput}
                icon="envelope"
                iconClass="grey-text"
              />
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
              <Field
                name="password2"
                label="Confirm password"
                group
                type="password"
                component={CustomInput}
                icon="unlock-alt"
                iconClass="grey-text"
              />
              {isErr && <span>It's password or email already exists</span>}

              <MDBRow className="d-flex align-items-center mb-4">
                <MDBCol md="6" className="text-center">
                  <MDBBtn type="submit" disabled={pristine || submitting} className="btn btn-default z-depth-1">
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

export default connect(
  mapState,
  actions
)(reduxForm({ form: "register", validate })(SignUpForm));
