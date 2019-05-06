import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';


const App = ({places}) => {
  return <MainScreen places={places} />;
};

App.propTypes = {
  places: PropTypes.array
};

export default App;
