import React from "react";
import {
  CardBody,
  CardImage,
  MDBIcon
} from "mdbreact";

const Card = () => {
  return (
    <div className="card-block">
        <CardImage
          className="img-fluid"
          src="https://png.pngtree.com/element_origin_min_pic/16/11/10/40439dc1ed9aa08c792a87d9e59fd12d.jpg"
          waves
        />
        <CardBody>
          <h5>Card title</h5>
          <p style={{ fontSize: '14px' }}>
            Some quick example bulk of the card&apos;s content.
          </p>
          <div className="price-section">
            <span className="teal-text">100$</span>
            <button className="btn-cart">
              <MDBIcon icon="shopping-cart" className="teal-text" />
            </button>
            <button className="btn-cart">
            <MDBIcon icon="heart" className="teal-text" />
            </button>
          </div>
          
        </CardBody>
    </div>
  );
};

export default Card;
