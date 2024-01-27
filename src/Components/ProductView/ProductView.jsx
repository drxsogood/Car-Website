import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/products/${id}?populate=*`);

        if (response.data && response.data.data && response.data.data.attributes) {
          console.log('Product Data:', response.data.data.attributes);
          setProduct(response.data.data.attributes);
        } else {
          console.error('Product not found or failed to fetch product details');
        }
      } catch (error) {
        console.error('Error during fetch:', error.message || 'Unknown error');
      }
    };
    fetchProductDetails();
  }, [id]);

  return (
    <div className="single-room">
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <br />
          <h2>Product Colors and Interiors</h2>
          <br />
          <div className="single-room-images">
            {product.images && product.images.data && product.images.data.length > 0 ? (
              product.images.data.map((image, index) => (
                <img key={index} src={`http://localhost:1337${image.attributes.url}`} alt={`${product.Name} - Image ${index + 1}`} className="product-image" />
              ))
            ) : (
              <img src={`http://localhost:1337${product.images?.data?.attributes?.url}`} alt={product.Name} className="product-image" />
            )}
          </div>

          <div className="single-room-info">
            <div>
              <h2 className="info1">Description:</h2>
              <p className="info-1">{product.description}</p>
            </div>

            <div>
              <h2 className="desc">Info</h2>
              <h3>Price:</h3>
              <p>₱{product.price}</p>
              <h3>Manufacturer:</h3>
              <p>{product.manufacturer}</p>
              <h3>Fuel Tank:</h3>
              <p>{product.FuelTank}</p>
              <h3>Sport Package:</h3>
              <p>{product.SportPackage}</p>
              <h3>Vin:</h3>
              <p>{product.vin}</p>
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

export default ProductView;
