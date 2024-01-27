import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './dealer.scss';

const DealerView = () => {
  const { id } = useParams();
  const [dealer, setDealer] = useState(null);

  useEffect(() => {
    const fetchDealerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/dealers/${id}?populate=*`);

        if (response.data && response.data.data && response.data.data.attributes) {
          console.log('Dealer Data:', response.data.data.attributes);
          setDealer(response.data.data.attributes);
        } else {
          console.error('Dealer not found or failed to fetch dealer details');
        }
      } catch (error) {
        console.error('Error during fetch:', error.message || 'Unknown error');
      }
    };
    fetchDealerDetails();
  }, [id]);

  return (
    <div className="two">
      {dealer ? (
        <div>
          <h1>{dealer.name}</h1>
          <br />
          <h2>Dealer Information</h2>
          <br />
          <div className="two-room">
            {dealer.images&& dealer.image.data && dealer.image.data.length > 0 ? (
              dealer.image.data.map((image, index) => (
                <img key={index} src={`http://localhost:1337${image.attributes.url}`} alt={`${dealer.name} - Image ${index + 1}`} className="dealer-image" />
              ))
            ) : (
              <img src={`http://localhost:1337${dealer.image?.data?.attributes?.url}`} alt={dealer.name} className="dealer-image" />
            )}
          </div>

            <div>
              <h2 className="twod">Info</h2>
              <h3>Email:</h3>
              <p>{dealer.email}</p>
              <h3>Phone Number:</h3>
              <p>{dealer.number}</p>
              <br></br>
            </div>
          </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DealerView;
