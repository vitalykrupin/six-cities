import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Operation} from '../../reducer/user/user';
import {getFavorites} from '../../reducer/user/selectors';
import PlaceList from '../place-list/place-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {Place} from '../../types';

interface Props {
  onLoadFavorites: () => void,
  favorites: Place[]
}

class Favorites extends React.PureComponent<Props, null> {
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

    return <React.Fragment>
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
    </React.Fragment>;
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
