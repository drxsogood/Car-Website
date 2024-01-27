import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const SalesRecord = ({ salesRecord }) => {
  console.log("salesRecord in SalesRecord component:", salesRecord);

  if (!salesRecord || !salesRecord.attributes) {
    console.log("Invalid salesRecord:", salesRecord);
    return <p>Invalid sales record</p>;
  }

  const {
    vin,
    brand,
    model,
    color,
    dsold,
    foption,
    Caddress,
    tpirce,
    soldby,
  } = salesRecord.attributes;

  console.log("Attributes:", salesRecord.attributes); // Log the attributes



  return (
    <div className="card-container">
      <Card>
        <CardBody>
          <CardTitle>{vin}</CardTitle>
          <CardSubtitle>
            <strong>Brand: {brand}</strong>
            <strong>Model: {model}</strong>
            <strong>Color: {color}</strong>
            <strong>Date Sold: {dsold}</strong>
            <strong>Options: {foption}</strong>
            <strong>Customer Address: {Caddress}</strong>
            <strong>Total Price: {tpirce}</strong>
            <strong>Sold By: {soldby}</strong>
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default SalesRecord;