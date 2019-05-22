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
    city: {
      name: `Paris`,
      coords: [1, 3],
    },
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
    city: {
      name: `Amsterdam`,
      coords: [48.8351, 2.3425],
    },
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
    city: {
      name: `Cologne`,
      coords: [150, 2],
    },
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
    city: {
      name: `Berlin`,
      coords: [11, 16],
    },
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    coords: [52.3809553943508, 4.939309666406198],
    image: `img/apartment-03.jpg`,
    price: `180`,
    rate: 100,
    isBookmarked: false,
    isPremium: true
  },
  {
    city: {
      name: `Cologne`,
      coords: [150, 2],
    },
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    coords: [52.3909553943508, 4.929309666406198],
    image: `img/apartment-02.jpg`,
    price: `132`,
    rate: 80,
    isBookmarked: true,
    isPremium: false
  }
];

it(`App correctly renders`, () => {
  const tree = renderer
    .create(
        <MockProvider>
          <App places={mockData}/>)
        </MockProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
