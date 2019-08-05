import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from "mdbreact";

class SaleForm extends Component {
  logValue = value => {
    console.log(value);
  };
  render() {
    return (
      <div className="modal-wrap">
        <MDBCard style={{ width: "80%" }}>
          <MDBCardBody>
            <div className="text-center">
              <h3 className="teal-text mb-5">
                <strong>Create Your Sale</strong>
              </h3>
            </div>
            <MDBInput label="Your name" />
            <MDBInput label="Your email" iconClass="dark-grey" />
            <MDBInput
              label="Your message"
              type="textarea"
              rows="2"
              icon="pencil-alt"
              iconClass="dark-grey"
            />
            <div className="text-center mt-1-half">
              <MDBBtn color="info" className="mb-2">
                <Link to="/sale" className="white-text">
                  Go Back
                </Link>
              </MDBBtn>
              <MDBBtn color="info" className="mb-2">
                send
                <MDBIcon icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}
export default SaleForm;
