import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import Dealer from "./Dealer";
import { useDealers } from "./useDealers";
import "./dealer.scss"; // Import the CSS file

const Home = () => {
  const { groupdealers, dealers, loading, error } = useDealers();
  const { groupdealerid } = useParams();
  const [sortOrder, setSortOrder] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleSortOrder = (order) => {
    setSortOrder(order);
    setDropdownVisible(false);
  };

  const getSortedDealers = () => {
    if (sortOrder) {
      return [...dealers].sort((a, b) => {
        const soldCarsA = a.attributes.Soldcar;
        const soldCarsB = b.attributes.Soldcar;
        return sortOrder === "desc" ? soldCarsB - soldCarsA : soldCarsA - soldCarsB;
      });
    } else {
      return dealers;
    }
  };

  const sortedDealers = getSortedDealers();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container>
      <div className="dropdown-container">
        <button className="toggle-button" onClick={() => setDropdownVisible(!dropdownVisible)}>
          Toggle Sort Order (Sold Cars)
        </button>
        {dropdownVisible && (
          <div className="dropdown-content">
            <button onClick={() => toggleSortOrder("desc")}>Sort by Highest Sold</button>
            <button onClick={() => toggleSortOrder("asc")}>Sort by Lowest Sold</button>
          </div>
        )}
      </div>
      {groupdealers.map((groupdealer) => (
        <div key={groupdealer.id}>
          {groupdealerid && groupdealerid !== groupdealer.id ? null : (
            <>
              <h2>{groupdealer.attributes.name}</h2>
              <Row>
                {sortedDealers
                  .filter(
                    (dealer) =>
                      !groupdealerid || dealer.attributes.groupdealer === groupdealerid
                  )
                  .map((dealer) => {
                    const { id, name, image, Soldcar } = dealer.attributes;
                    console.log("dealer Data:", dealer);
                    return (
                      <Col key={id} md={4}>
                        <Link to={`/dealer-details/${dealer.id}`}>
                          <Dealer
                            name={name}
                            image={image}
                            Soldcar={Soldcar}
                            className={sortOrder ? 'sorted' : ''}
                          />
                        </Link>
                      </Col>
                    );
                  })}
              </Row>
            </>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Home;
