import React, { Component } from "react";
import { Container } from "mdbreact";
import CarouselPage from "./product/CarouselPage";
import Card from "./card/Card";

class Sell extends Component {
  render() {

    const { products } = this.props;

    return (
      <Container>
        <h1 className="teal-text">Online Srore</h1>
        <CarouselPage />
        <div className="main-block">
          <h3 className="teal-text">Best Sale</h3>
          <div className="card-section">
            <Card product={products} />
          </div>
          <h3 className="teal-text">Most Popular Sale</h3>
          <div className="card-section">
            <Card product={products} />  
          </div>
          <h3 className="teal-text">New Products</h3>
          <div className="card-section">
            <Card product={products} />
          </div>
        </div>
      </Container>
    );
  }
}
export default Sell;
