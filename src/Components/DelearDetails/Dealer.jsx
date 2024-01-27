import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./dealer.scss";

const Dealer = ({ name, Soldcar, image }) => {
  console.log('Received props:', { name, Soldcar, image });
  // Check if 'image' is available and has a valid URL
  const imageUrl = image && image.data && image.data.attributes.url;

  return (
    <center>
    <Card className="product-cards">
      {imageUrl && (
        <CardImg
          top
          src={`http://localhost:1337${imageUrl}`}
          alt={`${name} - Image`}
        />
      )}
      <CardBody>
        <CardTitle>{name}</CardTitle>
      </CardBody>
      <CardSubtitle>
      <strong>Total Sold Cars:{Soldcar}</strong>
      </CardSubtitle>
    </Card>
    </center>
  );
};

export default Dealer;
