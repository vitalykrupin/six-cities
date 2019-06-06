import React from 'react';
import PropTypes from 'prop-types';
import CardBoard from '../card-board/card-board';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import withActiveOffer from '../../hocs/with-active-offer/with-active-offer';

const MainScreen = (props) => {
  const {
    places,
    cities,
    activeCity,
    getActiveCity
  } = props;

  const CardBoardWrapper = withActiveOffer(CardBoard);

  return (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" />
          </symbol>
        </svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <section className="locations container">

            <CitiesList
              cities={cities}
              activeCity={activeCity}
              // onCityClick={onCityClick}
            />

          </section>
        </div>

        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${places.length} ${places.length === 1 ? `place` : `places`} to stay in ${activeCity}`}</b>

              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>

                <select className="places__sorting-type" id="places-sorting" defaultValue={`popular`}>
                  <option className="places__option" value="popular">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select>
              </form>

              <CardBoardWrapper
                places={places}
                getActiveCity = {getActiveCity}
                activeCity = {activeCity}
                cities = {cities}
              />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map
                  places={places}
                  // activeCard={activeCard}
                />

              </section>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  places: PropTypes.array,
  cities: PropTypes.array,
  activeCity: PropTypes.object,
  getActiveCity: PropTypes.func
};

export default withActiveOffer(MainScreen);
