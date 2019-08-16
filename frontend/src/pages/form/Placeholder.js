import React from "react";
import { MDBIcon } from "mdbreact";

const Placeholder = ({ error, touched }) => (
  <div className={`placeholder-preview ${error && touched ? "has-error" : ""}`}>
    <MDBIcon
      icon="cloud-upload-alt"
      style={{ fontSize: 100, paddingTop: 70 }}
    />
    <p>Click or drag image file to this area to upload.</p>
  </div>
);

export default Placeholder;
