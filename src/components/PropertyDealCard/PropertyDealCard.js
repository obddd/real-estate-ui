import React from 'react';
import './PropertyDealCard.css';
import PropertyImage from '../../assets/456.png'

import Divider from '@material-ui/core/Divider';

const PropertyDealCard = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={PropertyImage} alt='Property' style={{width: '100%'}}/>
      </div>

      <div className="text-container">
        <div className="header">
          <div className="header-heading">
            <span>Robinson 77</span>
          </div>
          <div className='header-desc'>
            <span>77 Robinson Road, Shenton</span><br/>
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
        <div className='btn-container'>
        <button className='btn'>Register to Bid</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDealCard;
