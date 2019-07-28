import React from "react";
import {
  MDBBtn,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Col
} from "mdbreact";

const CardPage = () => {
  return (
    <div className="card-block">
      <Card>
        <CardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          waves
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example bulk of the card&apos;s content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardPage;
