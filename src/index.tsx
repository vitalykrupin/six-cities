import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reducer} from "./reducer";
import api from './api';


const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

ReactDOM.render(
    <Provider store={store}>
      <App
        places={offers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
