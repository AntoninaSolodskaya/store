import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import Card from "./card/Card";

const mapState = state => ({
  cards: state.cards
});

class RightColumn extends Component {
  render() {
    const { cards } = this.props;
    return (
      <MDBContainer className="mb-5">
        <div className="main-block">
          <h1 className="h1-responsive teal-text">Catalog of Products</h1>
          <div className="card-section">
            {cards && cards.map(card => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </MDBContainer>
    );
  }
}
export default connect(mapState)(RightColumn);
