import React from "react";
import { Row, Col } from "reactstrap";
import { useSales } from "./useSales";

const Home = () => {
  const { salesCategories, salesRecords, loading, error } = useSales();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="home">
      <h2 style={{ textAlign: "center" }}>Car Sale Record</h2>
      {salesCategories.map((salesCategory) => (
        <div key={salesCategory.id}>
          <h2 className="category-title">{salesCategory.attributes.name}</h2>
          <Row className="category">
            {salesRecords
              .filter((salesRecord) => {
                const categoryId =
                  salesRecord.attributes.category &&
                  salesRecord.attributes.category.id;
                return categoryId === salesCategory.id;
              })
              .map((filteredSalesRecord) => (
                <Col key={filteredSalesRecord.id} sm="4">
                  <div>
                    <p>VIN: {filteredSalesRecord.attributes.vin}</p>
                    <p>Brand: {filteredSalesRecord.attributes.brand}</p>
                    <p>Model: {filteredSalesRecord.attributes.model}</p>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Home;
