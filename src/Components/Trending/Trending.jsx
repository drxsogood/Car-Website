import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Trending.css';

import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

import car1 from '../../Assets/image4.png';
import car2 from '../../Assets/image6.png';
import car3 from '../../Assets/image7.png';

const carData = [
  {
    id: 7,
    image: car1,
    title: 'Used GT86',
    miles: '12457 Miles',
    AWD: ' Toyota code 4U-GSE and Subaru code FA20',
    price: '₱2,186,000',

  },
  {
    id: 8,
    image: car2,
    title: 'Used Cadillac ATS',
    miles: '10457 Miles',
    AWD: '3.6 L LF4 twin-turbo DOHC V6',
    price: '₱2,111,000',
  },
  {
    id: 9,
    image: car3,
    title: 'Used Jeep Wrangler',
    miles: '13457 Miles',
    AWD: '3.6L Pentastar V-6',
    price: '₱4,800,000',
  },
];

const Trending = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='trending section'>
      <div className='secContainer container'>
        <div data-aos='fade-up' className='secHeading flex'>
          <h3 className='secTitle'>Best Seller Of the Month</h3>

          <div className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon rightIcon' />
          </div>
        </div>

        <div className='carContainer grid'>
          {carData.map((car, index) => (
            <div key={index} data-aos='fade-up' className='singleCar grid'>
              <div className='imgDiv'>
                <img src={car.image} alt='Car Image' />
              </div>
              <h5 className='carTitle'>{car.title}</h5>
              <span className='miles'>{car.miles}</span>
              <span className='AWD'>{car.AWD}</span>

              <div className='price_seller flex'>
                <span className='price'>{car.price}</span>
                <Link to={`/car-details/${car.id}`} className="buyBtn">
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
