import React from 'react';
import renderer from 'react-test-renderer';
import CardBoard from './card-board';

const mockData = [
  {
    title: `Beautiful, luxurious apartment at great location`,
    type: `Apartment`,
    image: `img/apartment-01.jpg`,
    price: `120`,
    rate: 93,
  },
  {
    title: `Wood and stone place`,
    type: `Private room`,
    image: `img/room.jpg`,
    price: `80`,
    rate: 80,
  },
  {
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    image: `img/apartment-02.jpg`,
    price: `132`,
    rate: 80,
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    image: `img/apartment-03.jpg`,
    price: `180`,
    rate: 100,
  }
];

it(`component renders correctly`, () => {
  const tree = renderer
    .create(<CardBoard offers={mockData}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
