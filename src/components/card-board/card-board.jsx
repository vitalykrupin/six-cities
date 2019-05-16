import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

class CardBoard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((card, i) => <PlaceCard
          key={i}
          {...card}
        />)}
      </div>
    );
  }
}

CardBoard.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
    image: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.number,
    isBookmarked: PropTypes.bool,
    isPremium: PropTypes.bool
  })).isRequired
};

export default CardBoard;
