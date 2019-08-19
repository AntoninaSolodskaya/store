import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardBody, MDBCard, CardImage, MDBIcon, MDBBtn } from "mdbreact";

class Card extends Component {
  render() {
    const { card, deleteCard } = this.props; 
    return (
      <MDBCard className="my-3 cart">
        <CardImage
          className="img-fluid w-100"
          src={card.image}
          style={{ height: "300px" }}
          waves
        ></CardImage>
        <CardBody>
          <Link to={`/card/${card._id}`}><h5>{card.title}</h5></Link>
          <div className="price-section">
            <span className="teal-text">{card.price}$</span>
            <button className="btn-cart">
              <MDBIcon icon="shopping-cart" className="teal-text" />
            </button>
            <button className="btn-cart">
              <MDBIcon icon="heart" className="teal-text" />
            </button>
          </div>
        </CardBody>
        <MDBBtn onClick={deleteCard(card._id)} as="a" color="red" floated="right" >Delete</MDBBtn>
        <MDBBtn>
          <Link to={`/card/${card._id}`} className="white-text">View</Link>
        </MDBBtn>
      </MDBCard>
    );
  }
}

export default Card;
