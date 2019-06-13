import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import MainScreen from '../main-screen/main-screen';
import {ActionCreator} from "../../reducer";

const App = ({offers, places, onCityClick, city}) => {
  const citiesList = Array.from(new Set(places.map((place) => place.city.name)));

  return <MainScreen
    offers={offers}
    onCityClick={(selectedCity) => onCityClick(selectedCity, places)}
    city={city}
    cities={citiesList}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
    image: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.number,
    isBookmarked: PropTypes.bool,
    isPremium: PropTypes.bool
  })).isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
    image: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.number,
    isBookmarked: PropTypes.bool,
    isPremium: PropTypes.bool
  })).isRequired,
  onCityClick: PropTypes.func,
  city: PropTypes.string,
  cities: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (selectedCity, selectedOffers) => {
    dispatch(ActionCreator.changeCity(selectedCity));
    dispatch(ActionCreator.fetchOffers(selectedCity, selectedOffers));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
