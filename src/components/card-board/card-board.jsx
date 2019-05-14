import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

class CardBoard extends Component {
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
  offers: PropTypes.arrayOf(PropTypes.object)
};

export default CardBoard;
