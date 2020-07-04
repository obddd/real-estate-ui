import React from 'react';
import './CountryCard.css';

const CountryCard = () => {
    return (
      <div className="country-card-container">
        <div className="country-image-container"></div>

        <div className="country-text-container">
          <div className="country-card-header-heading">
            <span>Singapore</span>
          </div>
          <div>
            <span>(218 Properties)</span>
          </div>
        </div>
      </div>
    );
};

export default CountryCard;