import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";

export default class LeftColumn extends Component {
  render() {
    const bgGrey = { backgroundColor: "#F7F7F7" };
    return (
      <div className="mr-2 d-flex flex-column">
        <h2 className="teal-text">Left Column</h2>
        <div className="d-flex flex-column mb-4">
          <Link to="/sale" className="p-2 teal-text">
            Sale
          </Link>
          <Link to="/addSale" className="p-2 teal-text">
            Add Sale
          </Link>
          <Link to="/about" className="p-2 teal-text">
            About Us
          </Link>
          <Link to="/chat" className="p-2 teal-text">
            Chat
          </Link>
        </div>
        <div
          className="m-2 d-flex flex-column justify-content-center"
          style={bgGrey}
        >
          <h5 className="mt-3 teal-text text-center">
            Welcome to your account
          </h5>
          <MDBBtn className="mt-3 mb-2">Your Account</MDBBtn>
          <Link
            to="/register"
            className="teal-text d-flex justify-content-center mb-2"
          >
            Sign Up
          </Link>
        </div>
        <div
          className="m-2 d-flex flex-column justify-content-center"
          style={bgGrey}
        >
          <h5 className="mt-3 teal-text text-center">
            We are in social networks
          </h5>
          <div
            className="d-flex justify-content-between mb-3"
            style={{ width: "80%", margin: "0 auto" }}
          >
            <button className="sircle">
              <MDBIcon fab icon="facebook-f" />
            </button>
            <button className="sircle">
              <MDBIcon fab icon="telegram-plane" />
            </button>
            <button className="sircle">
              <MDBIcon fab icon="instagram" />
            </button>
            <button className="sircle">
              <MDBIcon fab icon="viber" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
