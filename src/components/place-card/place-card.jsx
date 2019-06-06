import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onBtnClick,
      // city,
      // description,
      // goods,
      // host,
      // id,
      // images,
      // is_premium,
      // is_favorite,
      // location,
      // max_adults,
      type,
      title,
      rating,
      price,
      // preview_image
    } = this.props;

    return (
      <article className="cities__place-card place-card">
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#" onClick={onBtnClick}>
            <img className="place-card__image" width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#" onClick={onBtnClick}>{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onBtnClick: PropTypes.func,
  city: PropTypes.object,
  description: PropTypes.string,
  goods: PropTypes.array,
  host: PropTypes.object,
  id: PropTypes.number,
  images: PropTypes.array,
  is_premium: PropTypes.bool,
  is_favorite: PropTypes.bool,
  location: PropTypes.object,
  max_adults: PropTypes.number,
  type: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  preview_image: PropTypes.string
};

export default PlaceCard;
