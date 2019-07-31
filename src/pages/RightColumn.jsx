import React, { Component } from "react";
import { Container } from "mdbreact";
import CarouselPage from "./CarouselPage";
import Card from "./Card";

class RightColumn extends Component {
  render() {
    return (
      <Container>
        <h1 className="teal-text">Online Srore</h1>
        <CarouselPage />
        <div className="main-block">
          <h3 className="teal-text">Best Sale</h3>
          <div className="card-section">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <h3 className="teal-text">Most Popular Sale</h3>
          <div className="card-section">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <h3 className="teal-text">New Products</h3>
          <div className="card-section">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Container>
    );
  }
}
export default RightColumn;
