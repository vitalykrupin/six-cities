import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import {getAuthorizationStatus, getUser, getPendingAuthStatus} from '../../reducers/user/selectors';
import Header from '../header/header.jsx/index.js';
import PageWrapper from '../page-wrapper/page-wrapper.jsx';
import MainPage from '../main-page/main-page.jsx';
import Favorites from '../favorites/favorites.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import {ROUTES} from '../../constants/constants';
import withRedirectRoute from '../../hocs/with-redirect-route/with-redirect-route';
import ErrorMessage from '../error-message/error-message';
import NotFound from '../not-found/not-found';

const App = (props) => {
  const {pendingAuthorization, isAuthenticated, user} = props;

  return (
    <React.Fragment>
      {pendingAuthorization ? <div>Loading...</div> : (
        <PageWrapper location={props.location.pathname}>
          <Header
            isAuthenticated={isAuthenticated}
            user={user}
          />
          <Switch>
            <Route
              path={ROUTES.HOME}
              component={MainPage}
              exact
            />
            <Route
              path={ROUTES.LOGIN}
              component={withRedirectRoute(SignIn, isAuthenticated, ROUTES.HOME, true)}
            />
            <Route
              path={`${ROUTES.OFFER}/:id`}
              component={OfferDetails}
            />
            <Route
              path={ROUTES.FAVORITES}
              component={withRedirectRoute(Favorites, isAuthenticated, ROUTES.LOGIN)}
            />
            <Route
              path={ROUTES.ERROR}
              component={withRedirectRoute(ErrorMessage, isAuthenticated, ROUTES.HOME, true)}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </PageWrapper>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthenticated: getAuthorizationStatus(state),
  user: getUser(state),
  pendingAuthorization: getPendingAuthStatus(state),
});

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    [`avatar_url`]: PropTypes.string,
    [`is_pro`]: PropTypes.bool,
  }),
  pendingAuthorization: PropTypes.bool,
  location: PropTypes.any,
};

export {App};
export default withRouter(connect(mapStateToProps)(App));
