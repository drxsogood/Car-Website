import React, { useState } from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import Product from "./Product";
import { useProducts } from "./useProducts";
import "./product.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const { categories, products } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter products based on search term, converts a string to lowercase letters
  const filterProducts = () => {
    return products.filter((product) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const vinMatch = product.attributes.vin.toLowerCase().includes(lowerCaseSearchTerm);
      const priceMatch = product.attributes.price.toString().includes(searchTerm);
      const nameMatch = product.attributes.name.toLowerCase().includes(lowerCaseSearchTerm);

      return vinMatch || priceMatch || nameMatch;
    });
  };

  return (
    <div>
      <div className="home">
        <div className="search-bar">
          <Input
            type="text"
            placeholder="Search for VIN, Price, or Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button color="primary">Search</Button>
        </div>
        <div></div>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>Enjoy our sales!</h2>
        {categories.length
          ? categories.map((category) => {
              const categoryProducts = filterProducts().filter(
                (product) => product.attributes.category.data.id === category.id
              );

              return categoryProducts.length ? (
                <>
                  <h2 className="category-title">{category.attributes.name}</h2>
                  <Row key={category.id} className="category">
                    {categoryProducts.map((product) => (
                      <Col sm="12" md="4" key={product.id}>
                        <Link to={`/product-details/${product.id}`}>
                          <Product product={product} />
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </>
              ) : null;
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
