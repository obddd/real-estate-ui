import React from 'react';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import SearchContainer from '../components/SearchContainer/SearchContainer';
import CollectionDeals from '../components/CollectionDeals/CollectionDeals';
import Divider from '@material-ui/core/Divider';
import CountrySlider from '../components/CountrySlider/CountrySlider';
import CollectionProperty from '../components/CollectionProperty/CollectionProperty';

const SearchPage = () => {
  return (
    <div>
      <HeaderBar />
      <SearchContainer />
      <CollectionDeals />
      <Divider variant="middle" />
      <CountrySlider />
      <CollectionProperty/>
    </div>
  );
};

export default SearchPage;
