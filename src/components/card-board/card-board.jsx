import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

class CardBoard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {places} = this.props;
    console.log(places);
    return (
      <div className="cities__places-list places__list tabs__content">
        {places.map((card, i) => <PlaceCard
          key={`place-${i}`}
          {...card}
        />)}
      </div>
    );
  }
}

CardBoard.propTypes = {
  places: PropTypes.array
};

export default CardBoard;
