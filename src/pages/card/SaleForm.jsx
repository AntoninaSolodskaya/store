import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, FieldArray } from "redux-form";
import { validate } from "../validation/index";
import cuid from "cuid";
import { MDBBtn, MDBIcon, MDBCard, MDBCardBody } from "mdbreact";
import CustomInput from "../form/CustomInput";
import { createCard, updateCard } from "./cardActions";
import RenderCharacters from "../form/RenderCharacters";
// import DropzoneField from "../form/DropzoneField";

const mapState = (state, ownProps) => {
  const cardId = ownProps.match.params.id;

  let card = {};

  if (cardId && state.cards.length > 0) {
    card = state.cards.filter(card => card.id === cardId)[0];
  }

  return {
    initialValues: card
  };
};

const actions = {
  createCard,
  updateCard
};

class SaleForm extends Component {
  // state = { 
  //   imageFile: {} 
  // };
 
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateCard(values);
      this.props.history.goBack();
    } else {
      const newCard = {
        ...values,
        id: cuid(),
        // img: this.state.imageFile || "/assets/photo.png"
        img: "/assets/photo.png"
      };
      this.props.createCard(newCard);
      this.props.history.push("/");
    }
  };

  handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <div className="modal-wrap">
        <MDBCard style={{ width: "80%" }}>
          <MDBCardBody>
            <form
              className="m-auto"
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
            >
              <div className="text-center">
                <h3 className="teal-text mb-5">
                  <strong>Create Your Sale</strong>
                </h3>
              </div>
              <Field
                name="title"
                label="Title"
                type="text"
                component={CustomInput}
                icon="signature"
                iconClass="dark-grey"
              />

              <Field
                name="price"
                label="Price"
                type="number"
                component={CustomInput}
                icon="dollar-sign"
                iconClass="dark-grey"
              />

              <FieldArray
                name="description"
                component={RenderCharacters}
                type="text"
              />

              {/* <Field
                name="img"
                label="Image"
                type="text"
                component={DropzoneField}
                imagefile={this.state.imageFile}
                handleOnDrop={this.handleOnDrop}
                icon="image"
                iconClass="dark-grey"
              /> */}
               {/* {this.state.preview && <img src={this.state.preview} alt="preview" />} */}
              <div className="text-center mt-1-half">
                <MDBBtn
                  color="info"
                  className="mb-2"
                  onClick={this.props.history.goBack}
                >
                  Go Back
                </MDBBtn>
                <MDBBtn
                  color="info"
                  className="mb-2"
                  disabled={invalid || submitting || pristine}
                  positive="true"
                  type="submit"
                >
                  send
                  <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
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
)(
  reduxForm({ form: "saleForm", enableReinitialize: true, validate })(SaleForm)
);
