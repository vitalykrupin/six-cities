import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mocks from '../src/mocks/offers';

ReactDOM.render(
    <App places={mocks} />,
    document.querySelector(`#root`)
);
