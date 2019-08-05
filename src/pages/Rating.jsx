import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

class Rating extends Component {
  render() {
    return (
      <div className="d-flex">
        <ul className="rating d-flex">
          <li>
            <MDBIcon icon="star" className="amber-text" />
          </li>
          <li>
            <MDBIcon icon="star" className="amber-text" />
          </li>
          <li>
            <MDBIcon icon="star" className="amber-text" />
          </li>
          <li>
            <MDBIcon icon="star" className="amber-text" />
          </li>
          <li>
            <MDBIcon far icon="star" className="amber-text pr-3" />
          </li>
        </ul>
      </div>
    );
  }
}
export default Rating;
