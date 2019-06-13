import * as React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list';

const citiesMock = [
  `Paris`,
  `Brussels`,
  `Amsterdam`,
  `Cologne`
];

it(`Cities List correctly renders`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={citiesMock}
      city={`Paris`}
      onCityClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
