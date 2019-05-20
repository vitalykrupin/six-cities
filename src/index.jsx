import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from "redux";

import App from './components/app/app';
import mocks from '../src/mocks/offers';
import {reducer} from "./reducer";

const init = (offers) => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App offers={offers} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(mocks);
