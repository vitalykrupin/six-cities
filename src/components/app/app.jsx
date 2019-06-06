import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MainScreen from '../main-screen/main-screen';
import {ActionCreator} from '../../reducers/data/data';
import {getOffers} from '../../reducers/data/selectors';
import {getCity} from '../../reducers/city/selectors';

class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const {
      places,
      getActiveCity,
      activeCity,
      cities
    } = this.props;

    return <MainScreen
      places = {places}
      getActiveCity = {getActiveCity}
      activeCity = {activeCity}
      cities = {cities}
    />;
  }
}

App.propTypes = {
  places: PropTypes.array,
  getActiveCity: PropTypes.func,
  activeCity: PropTypes.object,
  cities: PropTypes.array
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCity: getCity(state),
  cities: [...new Set(getOffers(state).map((item) => item.city))],
  places: getOffers(state).filter((place) => place.city.name === getCity(state).name)
});

const mapDispatchToProps = (dispatch) => ({
  getActiveCity: (activeCity, cities) => {
    const uniq = new Set(cities.map((el) => JSON.stringify(el)));
    const res = Array.from(uniq).map((el) => JSON.parse(el));
    let city = res.filter((item) => item.name === activeCity);
    dispatch(ActionCreator.getActiveCity(city[0]));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
