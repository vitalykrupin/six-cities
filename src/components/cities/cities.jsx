import React from 'react';
import PropTypes from 'prop-types';

const Cities = (props) => {
  const {cities, onCityClick, city} = props;

  return cities.map((item) => {
    return <li className="locations__item" key={`city-${item}`} onClick={() => {
      onCityClick(item);
    }}>
      <a className={item !== city.name ? `locations__item-link tabs__item` : `locations__item-link tabs__item tabs__item--active`} href="#">
        <span>{item}</span>
      </a>
    </li>;
  });
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default Cities;
