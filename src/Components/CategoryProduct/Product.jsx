import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Product = ({ product }) => {
  const { name, price, images } = product.attributes;

  const firstImage =
    images && images.data && images.data.length > 0 ? images.data[0] : null;

  return (
    <div className="card-container">
      <Card className="product-card">
        {firstImage && (
          <CardImg
            top
            src={`http://localhost:1337${firstImage.attributes.url}`}
            alt={`${name} - Image 1`}
          />
        )}
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>
            <strong>Price: ₱{price}</strong>
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
