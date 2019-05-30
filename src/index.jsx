import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import App from './components/app/app';
import {createAPI} from './api';
import {offers} from '../src/mocks/offers';
import {reducer} from './reducer';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  ReactDOM.render(
      <Provider store={store}>
        <App
          places={offers}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
