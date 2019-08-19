import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer } from "mdbreact";
import Card from "./card/Card";
import { deleteCard } from './card/cardActions';

const mapState = state => ({
  cards: state.cards
});

const actions = {
  deleteCard
}

class RightColumn extends Component {

  handleDeleteCard = cardId => () => {
    this.props.deleteCard(cardId);
  };

  render() {
    const { cards } = this.props;
    return (
      <MDBContainer className="mb-5">
        <div className="main-block">
          <h1 className="h1-responsive teal-text">Catalog of Products</h1>
          <div className="card-section">
            {cards && cards.map(card => (
              <Card key={card._id} card={card} deleteCard={this.handleDeleteCard} />
            ))}
          </div>
        </div>
      </MDBContainer>
    );
  }
}
export default connect(mapState, actions)(RightColumn);
