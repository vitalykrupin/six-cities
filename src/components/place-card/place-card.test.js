import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';

it(`Main screen correctly renders`, () => {
  const tree = renderer
    .create(<PlaceCard title={`Some title`}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
