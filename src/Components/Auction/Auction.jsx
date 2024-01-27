import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Auction.css'

// Importing car images
import car1 from '../../Assets/pngcars (1).png';
import car2 from '../../Assets/pngcars (2).png';
import car3 from '../../Assets/pngcars (7).png';
import car4 from '../../Assets/pngcars (4).png';
import car5 from '../../Assets/pngcars (5).png';
import car6 from '../../Assets/pngcars (6).png';

const Auction = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);

  // Hardcoded car data
  const cars = [
    { id: 6, image: car1, title: 'Used BMW X4', miles: 9000, AWD: 'B58B30M0 3.0 L I6 turbo', price: 9690000 },
    { id: 5, image: car2, title: 'Used Kia Soul', miles: 10000, AWD: 'turbocharged 1.6-liter', price: 1250000 },
    { id: 4, image: car3, title: 'Used dodge challenger', miles: 11457, AWD: '5.7L HEMI® V8 ENGINE', price: 3550000 },
    { id: 3, image: car4, title: 'Used Audi R8', miles: 12000, AWD: 'R8 Spyder V10 RWD', price: 17000000 },
    { id: 2, image: car5, title: 'Used Mercedes-Benz AMG GT', miles: 13457, AWD: 'twin-turbo 4.0-liter V-8', price: 8915000 },
    { id: 1, image: car6, title: 'Used Mercedes Benz A', miles: 12457, AWD: 'four-cylinder engines', price: 2690000 },

    // Add other cars similarly
  ];
  return (
    <div className='auction section'>
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className="secTitle">
            Best Deal
          </h3>
          
          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon rightIcon' />
          </div>
        </div>

        <div className="carContainer grid">
          {cars.map((car, index) => (
            <div key={index} className={`singleCar grid${index % 2 === 0 ? '' : ' singleCarActive'}`} data-aos='fade-up'>
              <div className="imgDiv">
                <img src={car.image} alt="Car Image" />
              </div>
              <h5 className="carTitle">{car.title}</h5>
              <span className="miles">{car.miles} Miles</span>
              <span className="AWD">{car.AWD}</span>
              <div className="price_buyBtn flex">
                <span className="price">₱{car.price}</span>
                <Link to={`/car-details/${car.id}`} className="buyBtn">
                  Information
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Auction;
