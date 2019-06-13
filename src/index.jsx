import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from "redux";

import App from './components/app/app';
import {offers} from '../src/mocks/offers';
import {reducer} from "./reducer";

const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
