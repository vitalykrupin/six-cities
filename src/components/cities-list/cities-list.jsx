import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class CitiesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      cities,
      activeCity,
      onCityClick
    } = this.props;

    const uniqCitiesArray = this._handleUnicCities(cities);

    return (
      <ul className={classNames(`locations__list`, `tabs__list`)}>
        {uniqCitiesArray.map((city, i) => {
          return <li className="locations__item" key={`city-${i}`}>
            <a className={`locations__item-link tabs__item tabs__item--${activeCity.name === city.name ? `active` : ``}`} href="#" id={it.name.toLowerCase()} onClick = {(evt) => {
              const target = evt.target;
              const text = target.textContent;
              onCityClick(text);
            }}>
              <span>{it.name}</span>
            </a>
          </li>;
        })}
      </ul>
    );
  }

  _handleUnicCities(array) {
    const uniq = new Set(array.map((el) => JSON.stringify(el)));
    const res = Array.from(uniq).map((el) => JSON.parse(el));
    return res;
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  activeCity: PropTypes.object,
  onCityClick: PropTypes.func,
};

export default CitiesList;
