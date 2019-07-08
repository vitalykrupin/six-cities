import * as React from 'react';
import {City} from '../../types';

interface Props {
  city: City,
  cities: string[],
  onCityClick: (city: string) => void
}

const Cities = (props: Props) => {
  const {
    cities,
    onCityClick,
    city
  } = props;

  return <React.Fragment>
      {cities.map((item) => {
        return <li className="locations__item" key={`city-${item}`} onClick={() => {
          onCityClick(item);
        }}>
          <a className={item !== city.name ? `locations__item-link tabs__item` : `locations__item-link tabs__item tabs__item--active`} href="#">
            <span>{item}</span>
          </a>
        </li>;
      })}
    </React.Fragment>;
};

export default Cities;
