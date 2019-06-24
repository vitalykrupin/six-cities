import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Operation} from '../../reducer/user/user';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

class AddFavoritesButton extends PureComponent {
  constructor(props) {
    super(props);

    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  render() {
    const {className, fromRoom, place} = this.props;
    return <button className={`${className}__bookmark-button button ${this._getButtonClass(place.isFavorite)}`} type="button" onClick={() => this._handleButtonClick()}>
      <svg className={this._getIconClass(fromRoom, place.isFavorite)} width={fromRoom ? `31` : `18`} height={fromRoom ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>;
  }

  _getButtonClass(isFavorite) {
    return isFavorite ? `place-card__bookmark-button--active` : ``;
  }

  _getIconClass(fromRoom, isFavorite) {
    if (isFavorite && fromRoom) {
      return `property__bookmark-icon--active`;
    } if (!isFavorite && fromRoom) {
      return `property__bookmark-icon`;
    } else {
      return `place-card__bookmark-icon`;
    }
  }

  _handleButtonClick() {
    const {addToFavorites, deleteFromFavorites, place, isAuthorizationRequired} = this.props;

    if (!isAuthorizationRequired) {
      if (place.isFavorite) {
        deleteFromFavorites(place.id);
      } else {
        addToFavorites(place.id);
      }
    } else {
      const {history} = this.props;
      history.push(`/login`);
    }
  }
}

AddFavoritesButton.propTypes = {
  place: PropTypes.shape({
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
  }).isRequired,
  fromRoom: PropTypes.bool,
  addToFavorites: PropTypes.func.isRequired,
  deleteFromFavorites: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  history: PropTypes.object,
  className: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(Operation.addToFavorites(id)),
  deleteFromFavorites: (id) => dispatch(Operation.deleteFromFavorites(id))
});

export {AddFavoritesButton};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AddFavoritesButton));
