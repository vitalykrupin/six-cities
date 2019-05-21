import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CitiesList = ({cities, city, onCityClick}) => {
  return (
    <ul className={classNames(`locations__list`, `tabs__list`)}>
      {cities.map((it) =>
        <li className={`locations__item`} key={`city-${it}`} onClick={() => onCityClick(it)}>
          <a className={classNames(
              `locations__item-link`,
              `${it === city ? `tabs__item--active tabs__item--active` : `tabs__item`}`
          )}>
            <span>{it}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
  onCityClick: PropTypes.func
};

export default CitiesList;
