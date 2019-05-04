import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const App = ({places}) => {
  return <MainScreen places={places} />;
};

App.PropTypes = {
  places: PropTypes.array
};

export default App;
