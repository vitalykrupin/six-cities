import React from 'react';
import renderer from 'react-test-renderer';
import {Sortings} from '../sortings/sortings';

describe(`Sortings`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
          <Sortings
            onSortingClick={jest.fn()}
            onSortingsClick={jest.fn()}
            onMouseLeave={jest.fn()}
            activeSorting={1}
            opened={true}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
