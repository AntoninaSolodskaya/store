import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBadge,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBView
} from "mdbreact";
import Rating from "./Rating";
import Chat from "./Chat";

class Sell extends Component {
  state = {
    activeItem: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };
  render() {
    return (
      <MDBContainer fluid className="pt-5">
        <div className="d-flex justify-content-between align-items-center pt-3">
          <h1 className="h1-responsive teal-text font-weight-bold pb-0">
            Name of Sale
          </h1>
          <MDBBadge color="default" className="py-2 px-2">
            product code:
          </MDBBadge>
        </div>
        <div className="d-flex">
          <Rating />
          <span>16 reviews</span>
        </div>
        <MDBNav className="nav-tabs mt-3">
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "1"}
              onClick={this.toggle("1")}
              role="tab"
            >
              All about the product
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "2"}
              onClick={this.toggle("2")}
              role="tab"
            >
              Specifications
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "3"}
              onClick={this.toggle("3")}
              role="tab"
            >
              Reviews <strong>16</strong>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem}>
          <MDBTabPane tabId="1" role="tabpanel" className="pb-2">
            <MDBContainer className="mt-5">
              <MDBRow>
                <MDBCol md="7" className="left-column">
                  <MDBView hover zoom>
                    <img
                      src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                      className="img-fluid"
                      alt=""
                      style={{ height: "400px", width: "400px" }}
                    />
                  </MDBView>
                </MDBCol>
                <MDBCol md="5">
                  <h1>Right</h1>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel" className="pb-2">
            <MDBCard>
              <MDBCardHeader>Characters</MDBCardHeader>
              <MDBCardBody>
                <MDBRow className="mb-3">
                  <MDBCol md="4">Country of origin</MDBCol>
                  <MDBCol md="8">China</MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="4">Closing method</MDBCol>
                  <MDBCol md="8">
                    Lightning For laptop with screen size 14 "-15.6"
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="4">Type of Backpack</MDBCol>
                  <MDBCol md="8">Colour Black</MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="4">Material</MDBCol>
                  <MDBCol md="8">Polyester</MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="4">Brand</MDBCol>
                  <MDBCol md="8">Registration Country Germany</MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol md="4">Warranty</MDBCol>
                  <MDBCol md="8">14 days</MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter>
                <p>
                  * Specifications and equipment are subject to change without
                  notice. The online store is not responsible for the partial
                  mismatch of the characteristics and photos indicated on our
                  website with the valid ones. Please specify specifications
                </p>
              </MDBCardFooter>
            </MDBCard>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel" className="pb-2">
            <Chat />
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default Sell;
