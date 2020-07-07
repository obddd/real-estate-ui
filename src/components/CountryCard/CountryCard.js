import React from 'react';
import './CountryCard.css';
import CountryImage from '../../assets/111.png';

const CountryCard = () => {
  return (
    <div className="country-card-container">
      <div className="country-image-container">
        <img src={CountryImage} alt="Country" />
      </div>

      <div className="country-text-container">
        <div className="country-card-heading">
          <span>Singapore</span>
        </div>
        <div className="country-card-desc" >
          <span>(218 Properties)</span>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
