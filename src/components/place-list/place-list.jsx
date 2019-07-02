import React from 'react';
import PropTypes from 'prop-types';
import Place from '../place/place';

const PlaceList = (props) => {
  const {offers, onPlaceClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item) => {
          return <Place
            place={item}
            key={item.id}
            onPlaceClick={onPlaceClick}
          />;
        })
      }
    </div>
  );
};


PlaceList.propTypes = {
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
  onPlaceClick: PropTypes.func.isRequired,
};

export default PlaceList;
