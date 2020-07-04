import React from 'react';
import './PropertyCard.css';
import Divider from '@material-ui/core/Divider';

const PropertyCard = () => {
  return (
    <div className="property-card-container">
      <div className="property-card-image"></div>

      <div className="property-card-text">
        <div className="property-card-desc">
          <div className="property-card-heading">
            <span>76 Neon Street</span>
          </div>
          <div className="property-card-address">
            <span>0556 Marvin Land Suite 998</span>
            <br />
            <span>Sydney, Australia</span>
          </div>
          <div className="property-card-desc-year">
            <span>Year of Completion</span>
            <span>2019</span>
          </div>
        </div>

        <Divider variant="middle" />

        <div className="property-card-detail">
          <div className="property-card-year">
            <span>99 Years</span>
            <br />
            <br />
            <span>Land Tenure</span>
          </div>
          <Divider orientation="vertical"/>
          <div className="property-card-area">
            <span>27,281</span>
            <br />
            <br />
            <span>Site Area</span>
          </div>
          <Divider orientation="vertical"/>
          <div className="property-card-nla">
            <span>3,700,000</span>
            <br />
            <br />
            <span>NLA (sqft)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
