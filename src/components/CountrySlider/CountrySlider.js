import React, { useState } from 'react';
import './CountrySlider.css';
import CountryCard from '../../components/CountryCard/CountryCard';
import ItemsCarousel from 'react-items-carousel';

const CountrySlider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;
  return (
    <div className="slider-container">
      <div className="slider-title">
        <span>Explore Country Opportunities</span>
      </div>
      <div className="slider-title">
        <span>___</span>
      </div>

      <div style={{  padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button className='slider-btn'>{'<'}</button>}
        rightChevron={<button className='slider-btn'>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <CountryCard/>
        <CountryCard/>
        <CountryCard/>
        <CountryCard/>
        <CountryCard/>
        <CountryCard/>
      </ItemsCarousel>
    </div>
    </div>
  );
};

export default CountrySlider;
