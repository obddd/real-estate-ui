import React from 'react';
import './PropertyCard.css';

import Divider from '@material-ui/core/Divider';

const PropertyCard = () => {
  return (
    <div className="card-container">
      <div className="image-container"></div>

      <div className="text-container">
        <div className="header">
          <div className="header-heading">
            <h2>Robinson 77</h2>
          </div>
          <div>
            <span>77 Robinson Road, Shenton</span>
          </div>
          <div>
            <span>Way-Robinson Rd-Cecil St, Singapore</span>
          </div>
        </div>

        <Divider variant="middle" />

        <div className="desc">
          <div className="desc-section">
            <span className="desc-section-span">Year of Completion</span>
            <span className="desc-section-span">2019</span>
          </div>
          <div className="desc-section">
            <span className="desc-section-span">Land Tenure</span>
            <span className="desc-section-span">99 Years</span>
          </div>
          <div className="desc-section">
            <span className="desc-section-span">Site Area (sqft)</span>
            <span className="desc-section-span">27,281</span>
          </div>
          <div className="desc-section">
            <span className="desc-section-span">NLA 9 (sqft)</span>
            <span className="desc-section-span">3,700,000</span>
          </div>
        </div>

        <Divider variant="middle" />

        <div className="desc2">
          <div className="desc-section2">
            <span className="desc-section-span">Carpark Lots</span>
            <span className="desc-section-span">900</span>
          </div>
          <div className="desc-section2">
            <span className="desc-section-span">Components</span>
            <span className="desc-section-span">Office, Retail, Hotel</span>
          </div>
          <div className="desc-section2">
            <span className="desc-section-span">Major Tenants</span>
            <span className="desc-section-span">CITI Bank, Allianz</span>
          </div>
        </div>

        <button className='btn'>Register to Bit</button>
      </div>
    </div>
  );
};

export default PropertyCard;
