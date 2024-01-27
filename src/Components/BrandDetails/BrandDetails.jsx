import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './pasta.scss';


const BrandDetails = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const fetchBrandDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/brands/${id}?populate=*`);

        if (response.data && response.data.data && response.data.data.attributes) {
          console.log('Brand Data:', response.data.data.attributes);
          setBrand(response.data.data.attributes);
        } else {
          console.error('Brand not found or failed to fetch brand details');
        }
      } catch (error) {
        console.error('Error during fetch:', error.message || 'Unknown error');
      }
    };
    fetchBrandDetails();
  }, [id]);

  return (
    <div className="room">
      {brand ? (
        <div>
          <h1>{brand.Name}</h1>
          <h2>Top Seller Car</h2>
          <br></br>
          <div className="room-images">
            {Array.isArray(brand.img.data) ? (
              brand.img.data.map((image, index) => (
                <div key={index} className="img-container">
                  <img
                    src={`http://localhost:1337${image.attributes.url}`}
                    alt={brand.Name}
                    className="brand-image"
                  />
                  <div className="description">
                    <h1 className="info">Car Name</h1>
                    <p>{brand[`desc${index + 1}`]}</p>
                    <h4 className="info">Vin id:</h4>
                    <p>{brand[`vin${index + 1}`]}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="image-container">
                <img
                  src={`http://localhost:1337${brand.img.data.attributes.url}`}
                  alt={brand.Name}
                  className="brand-image"
                />
                <div className="description">
                  <h1 className="info">Car Name</h1>
                  <p>{brand.desc1}</p>
                  <h4 className="info">Vin id:</h4>
                  <p>{brand.vin1}</p>
                </div>
                
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BrandDetails;
