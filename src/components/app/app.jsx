import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import MainScreen from '../main-screen/main-screen';
import {ActionCreator} from "../../reducer";

const App = ({offers, onCityClick, city, cities}) => {
  // console.log(city);
  // const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));
  console.log(offers);

  return <MainScreen
    offers={offers}
    onCityClick={onCityClick}
    city={city}
    cities={cities}
  />;
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
  })).isRequired,
  onCityClick: PropTypes.func,
  city: PropTypes.string,
  cities: PropTypes.array
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  // offers: state.offers.filter((offer) => offer.city.name === state.city),
  cities: Array.from(new Set(state.offers.map((offer) => offer.city.name)))
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (selectedCity, offers) => {
    dispatch(ActionCreator.changeCity(selectedCity));
    dispatch(ActionCreator.fetchOffers(selectedCity, offers));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
