import React from 'react';
import PropTypes from 'prop-types';
import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import Cities from '../cities/cities';
import Sortings from '../sortings/sortings';
import withActiveCard from '../../hocs/with-active-card/with-active-card';
import withSorted from '../../hocs/with-sorted/with-sorted';

const MainPage = (props) => {
  const {
    cities,
    leaflet,
    offers,
    city,
    onCityClick,
    onPlaceClick,
    activeCard,
    onSortingClick,
    sortedOffers,
    activeSorting
  } = props;

  const filteredOffers = sortedOffers.length === 0
    ? offers.filter((item) => item.city.name === city.name)
    : sortedOffers;

  return <>
    <h1 className="visually-hidden">Cities</h1>
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <Cities
            cities={cities}
            city={city}
            onCityClick={onCityClick}
          />
        </ul>
      </section>
    </div>

    <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${filteredOffers.length} ${filteredOffers.length === 1 ? `place` : `places`} to stay in ${city.name}`}</b>
          <Sortings
            onSortingClick={onSortingClick}
            activeSorting={activeSorting}
          />
          <PlaceList
            key={`place-list-${city.name}`}
            offers={filteredOffers}
            onPlaceClick={onPlaceClick}
          />
        </section>
        <div className="cities__right-section">
          <Map
            offers={filteredOffers}
            city={city}
            leaflet={leaflet}
            activeCard={activeCard}
          />
        </div>
      </div>
    </div>
  </>;
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    goods: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    host: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.object.isRequired,
    }).isRequired,
  })).isRequired,
  sortedOffers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    goods: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    host: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.object.isRequired,
    }).isRequired,
  })).isRequired,
  leaflet: PropTypes.object.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.object.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onPlaceClick: PropTypes.func.isRequired,
  onSortingClick: PropTypes.func.isRequired,
  activeCard: PropTypes.object,
  activeSorting: PropTypes.number.isRequired,
};

export {MainPage};

export default withActiveCard(withSorted(MainPage));
