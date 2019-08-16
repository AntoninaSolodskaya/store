import React, { Component } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCardHeader,
  MDBBtn,
  MDBIcon
} from "mdbreact";

class ReviewForm extends Component {
  render() {
    return (
      <MDBContainer className="my-5">
        <MDBCardHeader className="border-0 bg-white font-weight-bold d-flex justify-content-center">
          <h1 className="h1-responsive font-weight-bold teal-text">
            Leave a review
          </h1>
        </MDBCardHeader>
        <ul className="d-flex justify-content-center w-100 p-0">
          <li className="pr-3">
            <MDBIcon far icon="star" className="amber-text" size="3x" />
            <p className="d-flex justify-content-center pt-2">Bad</p>
          </li>
          <li className="pr-3">
            <MDBIcon far icon="star" className="amber-text" size="3x" />
            <p className="d-flex justify-content-center pt-2">Middle</p>
          </li>
          <li className="pr-3">
            <MDBIcon far icon="star" className="amber-text" size="3x" />
            <p className="d-flex justify-content-center pt-2">Normal</p>
          </li>
          <li className="pr-3">
            <MDBIcon far icon="star" className="amber-text" size="3x" />
            <p className="d-flex justify-content-center pt-2">Good</p>
          </li>
          <li className="pr-3">
            <MDBIcon far icon="star" className="amber-text" size="3x" />
            <p className="d-flex justify-content-center pt-2">Best</p>
          </li>
        </ul>
        <div className="bg-white d-flex px-3 mx-auto" style={{ maxWidth: "600px" }}>
          <form className="d-flex flex-column w-100">
            <MDBInput type="text" label="Disadvantages" />
            <MDBInput type="text" label="Advantages" />
            <div className="form-group">
              <MDBInput type="textarea" label="Your comment" rows="5" />
            </div>
            <MDBInput label="Foto" />
            <MDBInput label="Your name" />
            <MDBInput type="email" label="Your e-mail" />

            <div className="text-center mt-4">
              <MDBBtn rounded>Post</MDBBtn>
            </div>
          </form>
        </div>
      </MDBContainer>
    );
  }
}
export default ReviewForm;
