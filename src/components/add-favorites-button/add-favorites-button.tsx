import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Operation} from '../../reducer/user/user';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {Place} from '../../types';

interface Props {
  place: Place,
  fromRoom: boolean,
  history: {push: (path: string) => void},
  className: string,
  isAuthorizationRequired: boolean,
  addToFavorites: (id: number) => void,
  deleteFromFavorites: (id: number) => void
}

class AddFavoritesButton extends React.PureComponent<Props> {
  constructor(props) {
    super(props);

    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  render() {
    const {
      className,
      fromRoom,
      place
    } = this.props;

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
    const {
      addToFavorites,
      deleteFromFavorites,
      place,
      isAuthorizationRequired
    } = this.props;

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
