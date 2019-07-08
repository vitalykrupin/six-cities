import * as React from 'react';
import Place from '../place/place';
import {Place as Offer} from '../../types';

interface Props {
  offers: Offer[],
  onPlaceClick: () => void
}

const PlaceList = (props: Props) => {
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

export default PlaceList;
