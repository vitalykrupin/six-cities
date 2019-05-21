import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CitiesList = ({cities, selectedCity, onCityClick}) => {
  // const _handleClick = (event, city) => {
  //   event.preventDefault();
  //   onCityClick(city);
  // };

  return (
    <ul className={classNames(`locations__list`, `tabs__list`)}>
      {cities.map((city) =>
        <li className={`locations__item`} key={`city-${city}`}>
          <a onClick={() => onCityClick(city)}
            className={classNames(
                `locations__item-link`,
                `${city === selectedCity ? `tabs__item tabs__item--active` : `tabs__item`}`
            )}
          >
            <span>{city}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  selectedCity: PropTypes.string,
  onCityClick: PropTypes.func
};

export default CitiesList;
