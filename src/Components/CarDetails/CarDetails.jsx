import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './CarDetails.scss';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/cars/${id}?populate=*`);

        if (response.data && response.data.data && response.data.data.attributes) {
          console.log('Car Data:', response.data.data.attributes);
          setCar(response.data.data.attributes);
        } else {
          console.error('Car not found or failed to fetch car details');
        }
      } catch (error) {
        console.error('Error during fetch:', error.message || 'Unknown error');
      }
    };
    fetchCarDetails();
  }, [id]);

  return (
    <div className="single-room">
      {car ? (
        <div>
          <h1>{car.Name}</h1>
          <br />
          <h2>Car Interiors</h2>
          <br />
          <div className="single-room-images">
            {Array.isArray(car.img.data) ? (
              car.img.data.map((image, index) => (
                <img key={index} src={`http://localhost:1337${image.attributes.url}`} alt={car.Name} className="car-image" />
              ))
            ) : (
              <img src={`http://localhost:1337${car.img.data.attributes.url}`} alt={car.Name} className="car-image" />
            )}
          </div>

          <div className="single-room-info">
            <div>
              <h2 className="info">Description:</h2>
              <p className="info-1">{car.Description}</p>
            </div>

            <div>
              <h2 className="desc">Info</h2>
              <h3>Price:</h3>
              <p>₱{car.Price}</p>
              <h3>Manufacturer:</h3>
              <p>{car.Manufacturer}</p>
              <h3>Fuel Tank:</h3>
              <p>{car.FuelTank}</p>
              <h3>Sport Package:</h3>
              <p>{car.SportPackage}</p>
              <h3>Vin:</h3>
              <p>{car.vin}</p>
              <br></br>
              <Link to={`/home-dealers/dealers`}>
              <button className="inquire-button">Inquire Now</button>
              </Link>
            </div>
          </div>      
          </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    
  );
};

export default CarDetails;
