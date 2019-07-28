import React, { Component } from "react";
import { Container } from "mdbreact";
import CarouselPage from "./CarouselPage";
import CardPage from "./CardPage";

class RightColumn extends Component {
  render() {
    return (
      <Container>
        <h1 className="teal-text">Right Column</h1>
        <CarouselPage />
        <div className="main-block">
          <h3 className="teal-text">Best Sale</h3>
          <div className="card-section">
            <CardPage />
            <CardPage />
            <CardPage />
          </div>
          <h3 className="teal-text">Most Popular Sale</h3>
          <div className="card-section">
            <CardPage />
            <CardPage />
            <CardPage />
          </div>
          <h3 className="teal-text">New Products</h3>
          <div className="card-section">
            <CardPage />
            <CardPage />
            <CardPage />
          </div>
        </div>
      </Container>
    );
  }
}
export default RightColumn;
