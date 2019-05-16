import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = ({offers}) => {
  return <MainScreen offers={offers} />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
    image: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.number,
    isBookmarked: PropTypes.bool,
    isPremium: PropTypes.bool
  })).isRequired
};

export default App;
