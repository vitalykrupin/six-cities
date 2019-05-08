import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class PlaceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: this.props.isBookmarked
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({
      isBookmarked: !this.state.isBookmarked
    });
  }

  render() {
    const {title, type, image, price, rate, onBtnClick} = this.props;

    return (
      <article className="cities__place-card place-card">
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#" onClick={onBtnClick}>
            <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={cn(`place-card__bookmark-button button`, this.state.isBookmarked && `marked`)} type="button" onClick={this._handleClick}>
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rate}%`}} />
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
  title: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  rate: PropTypes.number,
  isBookmarked: PropTypes.bool,
  isPremium: PropTypes.bool,
  onBtnClick: PropTypes.func
};

export default PlaceCard;
