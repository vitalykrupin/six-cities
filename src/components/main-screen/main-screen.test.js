import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen';

it(`Main screen correctly renders`, () => {
  const tree = renderer
    .create(<MainScreen offers={[]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
