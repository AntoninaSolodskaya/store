import React, { Fragment } from "react";
import { MDBInput } from "mdbreact";

const CustomInput = ({
  input,
  name,
  label,
  type,
  icon,
  meta: { touched, error }
}) => (
  <Fragment>
    <MDBInput {...input} name={name} type={type} label={label} icon={icon} />
    {touched && error && <span>{error}</span>}
  </Fragment>
);

export default CustomInput;
