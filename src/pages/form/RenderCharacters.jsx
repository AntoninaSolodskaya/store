import React, { Fragment } from "react";
import { Field } from 'redux-form'
import { MDBBtn } from "mdbreact";
import CustomInput from "../form/CustomInput";

const RenderCharacters = ({ fields }) => {
  return (
    <Fragment>
      {fields.map((name, index) => (
        <div key={index} className="input-array">
          <Field
            name={`${name}.item`}
            component={CustomInput}
            type="text"
            className="ingredient"
            label="Item of Product"
            icon="pencil-alt"
            iconClass="dark-grey"
          />
          <Field
            name={`${name}.characters`}
            label="Characters of Product"
            component={CustomInput}
            type="text"
          />
          <MDBBtn
            type="button"
            className="hide"
            size="sm"
            onClick={() => fields.remove(index)}
          >
            &times;
          </MDBBtn>
        </div>
      ))}
      <div className="d-flex justify-content-center" >
         <MDBBtn type="button" onClick={() => fields.push()}>
        Click to add +
      </MDBBtn>
      </div>
     
    </Fragment>
  );
};

export default RenderCharacters;
