import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Operation} from '../../reducer/user/user';
import {getFavorites} from '../../reducer/user/selectors';
import PlaceList from '../place-list/place-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadFavorites} = this.props;
    onLoadFavorites();
  }

  render() {
    const {favorites, onLoadFavorites} = this.props;

    if (favorites !== null) {
      if (favorites.length === 0) {
        return <FavoritesEmpty />;
      }

      return this._renderFavorites(favorites);
    } else {
      onLoadFavorites();
    }
    return null;
  }

  _renderFavorites(favorites) {
    const preparedFavorites = this._getFavoritesByCities(favorites);

    return <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                preparedFavorites.map((item) => {
                  return (
                    <li key={item.city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link">
                            <span>{item.city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <PlaceList
                          offers={item.offers}
                          onPlaceClick={() => {}}
                        />
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </>;
  }

  _getFavoritesByCities(favorites) {
    return favorites.reduce((acc, offer) => {
      const city = acc.find((item) => item.city === offer.city.name);
      if (city) {
        city.offers.push(offer);
      } else {
        acc.push({city: offer.city.name, offers: [offer]});
      }
      return acc;
    }, []);
  }
}

Favorites.propTypes = {
  onLoadFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape({
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
  })),
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites: () => dispatch(Operation.loadFavorites()),
});

export {Favorites};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);
