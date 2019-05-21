import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {createStore} from 'redux';
import {initialState, reducer} from '../../reducer';
import {Provider} from 'react-redux';

const createMockStore = (state = initialState) => createStore(reducer, state);

export const MockProvider = ({state = initialState, children} = {}) => (
  <Provider store={createMockStore(state)}>
    {children}
  </Provider>
);

const mockData = [
  {
    title: `Beautiful, luxurious apartment at great location`,
    type: `Apartment`,
    coords: [52.3909553943508, 4.85309666406198],
    image: `img/apartment-01.jpg`,
    price: `120`,
    rate: 93,
    isBookmarked: true,
    isPremium: true
  },
  {
    title: `Wood and stone place`,
    type: `Private room`,
    coords: [52.369553943508, 4.85309666406198],
    image: `img/room.jpg`,
    price: `80`,
    rate: 80,
    isBookmarked: false,
    isPremium: false
  },
  {
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    coords: [52.3909553943508, 4.929309666406198],
    image: `img/apartment-02.jpg`,
    price: `132`,
    rate: 80,
    isBookmarked: true,
    isPremium: false
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    coords: [52.3809553943508, 4.939309666406198],
    image: `img/apartment-03.jpg`,
    price: `180`,
    rate: 100,
    isBookmarked: false,
    isPremium: true
  }
];

it(`App correctly renders`, () => {
  const tree = renderer
    .create(
        <MockProvider>
          <App offers={mockData}/>)
        </MockProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
