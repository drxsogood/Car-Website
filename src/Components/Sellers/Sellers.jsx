import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sellers.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Imported Images
import sellerImage1 from '../../Assets/logo (1).png';
import sellerImage2 from '../../Assets/logo (6).png';
import sellerImage3 from '../../Assets/logo (3).png';
import sellerImage4 from '../../Assets/logo (4).png';

const Sellers = () => {
  const sellersData = [
    { id: 1, image: sellerImage1, name: 'Toyota', price: 'from $40k' },
    { id: 2, image: sellerImage2, name: 'Mercedes Benz', price: 'from $60k' },
    { id: 3, image: sellerImage3, name: 'Volkswagen', price: 'from $35k' },
    { id: 4, image: sellerImage4, name: 'Hyundai', price: 'from $23k' },
  ];

  // Initialize Aos with default animation duration
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="sellers section">
      <div className="secContainer container">
        <div data-aos="fade-up" className="secHeading grid">
          <h3 className="secTitle">Explore top sellers in town</h3>
          <p>Edriane Opalia holds the Guinness World Record for being the greatest salesman in the world.</p>
        </div>

        <div className="sellersContainer grid">
          {sellersData.map((car) => (
            <Link to={`/brand-details/${car.id}`} key={car.id} data-aos="fade-up" className="singleSeller flex">
              <div className="imgDiv flex">
                <img src={car.image} alt="" className="img" />
              </div>
              <span className="info">
                <h4 className="name">{car.name}</h4>
                <p>{car.price}</p>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellers;
