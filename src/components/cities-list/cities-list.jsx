import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withHoverItem from '../../hocs/with-hover-item/with-hover-item';

const CitiesList = ({cities, city, onCityClick, setHoverItem}) => {
  return (
    <ul className={classNames(`locations__list`, `tabs__list`)}>
      {cities.map((it) =>
        <li className={`locations__item`} key={`city-${it}`}>
          <a onClick={() => {
            onCityClick(it);
            setHoverItem(it);
          }} className={classNames(
              `locations__item-link`,
              `${it === city ? `tabs__item tabs__item--active` : `tabs__item`}`
          )}
          >
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
  onCityClick: PropTypes.func,
  setHoverItem: PropTypes.func
};

export default withHoverItem(CitiesList);
