import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardBody, MDBCard, CardImage, MDBIcon, MDBBtn } from "mdbreact";

class Card extends Component {
  render() {
    const { card } = this.props; 
    return (
      <MDBCard className="my-3 cart">
        <CardImage
          className="img-fluid w-100"
          src={card.img}
          style={{ height: "300px" }}
          waves
        ></CardImage>
        <CardBody>
          <Link to={`/card/${card.id}`}><h5>{card.title}</h5></Link>
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
        <MDBBtn>
          <Link to={`/card/${card.id}`} className="white-text">View</Link>
        </MDBBtn>
      </MDBCard>
    );
  }
}

export default Card;
