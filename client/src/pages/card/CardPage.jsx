import React, { Component } from "react";
import { connect } from "react-redux";
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
import Rating from "../sale/Rating";
import Chat from "../chat/Chat";

const mapState = (state, ownProps) => {
  const cardId = ownProps.match.params.id;
  let card = {};

  if (cardId && state.cards.length > 0) {
    card = state.cards.filter(card => card.id === cardId)[0];
  }

  return {
    card
  };
};

class CardPage extends Component {
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
    const { card } = this.props;
    return (
      <MDBContainer fluid className="pt-5">
        <div className="d-flex justify-content-between align-items-center pt-3">
          <h1 className="h1-responsive teal-text font-weight-bold pb-0">
            {card.title}
          </h1>
          <MDBBadge color="default" className="py-2 px-2">
            product code:{card.id}
          </MDBBadge>
        </div>
        <div className="d-flex justify-content-around w-50">
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
                      src={card.img}
                      className="img-fluid"
                      alt=""
                      style={{ height: "400px", width: "400px" }}
                    />
                    <span>{card.price}$</span>
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
              <MDBCardHeader>Characters of Product</MDBCardHeader>
              <MDBCardBody>
                {card.description &&
                  Object.values(card.description).map((text, i) => (
                    <MDBRow className="mb-3" key={i}>
                      <MDBCol md="4">{`${text.item}`}</MDBCol>
                      <MDBCol md="8">{`${text.characters}`}</MDBCol>
                    </MDBRow>
                  ))}
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
            <Chat card={card} />
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default connect(mapState)(CardPage);
