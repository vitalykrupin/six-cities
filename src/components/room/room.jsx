import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {Operation} from '../../reducer/data/data';
import {getOffers} from '../../reducer/data/selectors';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import PlaceList from '../place-list/place-list';
import AddFavoritesButton from '../add-favorites-button/add-favorites-button';
import withActiveCard from '../../hocs/with-active-card/with-active-card';

class Room extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onLoadOffers} = this.props;
    if (offers.length !== 0) {
      const id = this.props.match.params.id;
      const offer = this._getOffer(id, offers);
      const filteredOffers = this._getFilteredOffers(offers, offer, 3);
      return this._renderOffer(offer, filteredOffers);
    } else {
      onLoadOffers();
    }
    return null;
  }

  _renderOffer(offer, offers) {
    const {onPlaceClick, activeCard} = this.props;
    return <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {this._renderPhotos(offer.images.slice(0, 6))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium ? <div className="property__mark">
              <span>Premium</span>
            </div> : null}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <AddFavoritesButton
                key={offer.id}
                fromRoom={true}
                className={`property`}
                place={offer}
              />
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${(offer.rating * 100) / 5}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {this._renderGoods(offer.goods)}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper ${offer.host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={`${offer.host.avatarUrl}`} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                {offer.host.isPro ? <span className="property__user-status">
                  Pro
                </span> : null}
              </div>
              <div className="property__description">
                <p className="property__text">{offer.description}</p>
              </div>
            </div>
            <ReviewList
              key={`ReviewList-${offer.id}`}
              id={offer.id}
            />
          </div>
        </div>
        <Map
          offers={offers.concat(offer)}
          city={offer.city}
          leaflet={leaflet}
          activeCard={activeCard === null ? offer : activeCard}
          className="property__map map"
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <PlaceList
              key={`place-list-${offers.id}`}
              offers={offers}
              onPlaceClick={onPlaceClick}
            />
          </div>
        </section>
      </div>
    </main>;
  }

  _getOffer(id, offers) {
    return offers.find((item) => item.id === +id);
  }

  _renderPhotos(images) {
    return images.map((item) => <div className="property__image-wrapper" key={item}>
      <img className="property__image" src={item} alt="Photo studio"/>
    </div>);
  }

  _renderGoods(goods) {
    return goods.map((item) => <li className="property__inside-item" key={item}>{item}</li>);
  }

  _renderDescription(description) {
    return description.split(`.` || `!`).map((item) => <p className="property__text" key={item}>{item}</p>);
  }

  _getFilteredOffers(offers, offer, amount = 3) {
    return offers.map((item) => {
      item.distance = this._getDistance(offer.location.latitude, offer.location.longitude, item.location.latitude, item.location.longitude);
      return item;
    }).sort((place1, place2) => place1.distance - place2.distance).slice(1, amount + 1);
  }

  _getDistance(lat1, lon1, lat2, lon2) {
    let radlat1 = Math.PI * lat1 / 180;
    let radlat2 = Math.PI * lat2 / 180;
    let theta = lon1 - lon2;
    let radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
  }
}

Room.propTypes = {
  match: PropTypes.object.isRequired,
  onLoadOffers: PropTypes.func.isRequired,
  onPlaceClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    goods: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    host: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.object.isRequired,
    }).isRequired,
  })).isRequired,
  activeCard: PropTypes.object,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers: () => dispatch(Operation.loadOffers()),
});

export {Room};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withActiveCard(Room));
