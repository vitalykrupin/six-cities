import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = ({offers}) => {
  return <MainScreen offers={offers} />;
};

App.propTypes = {
  offers: PropTypes.array
};

export default App;
