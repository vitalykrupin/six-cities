import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import AddFavoritesButton from '../add-favorites-button/add-favorites-button';
import {getOffers} from '../../reducer/data/selectors';
import {Place as Offer} from '../../types';

interface Props {
  offers: Offer[],
  place: Offer,
  onPlaceClick: (place: Offer) => void 
}

class Place extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, place} = this.props;
    const id = place.id;
    const offer = this._getOffer(id, offers);
    return this._renderOffer(offer);
  }

  _renderOffer(place) {
    const {onPlaceClick} = this.props;

    return <article className="cities__place-card place-card">
      {
        place.isPremium ? <div className="place-card__mark">
          <span>Premium</span>
        </div> : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a onClick={() => onPlaceClick(place)}>
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <AddFavoritesButton
            key={place.id}
            className={`place-card`}
            place={place}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(place.rating * 100) / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>;
  }

  _getOffer(id, offers) {
    return offers.find((item) => item.id === +id);
  }
}

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

export {Place};

export default connect(
    mapStateToProps,
    null
)(Place);
