import React from 'react';
import renderer from 'react-test-renderer';
import MainPageEmpty from '../main-page-empty/main-page-empty';

describe(`MainPageEmpty`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
          <MainPageEmpty
            city={{
              name: `Berlin, gelibte`,
            }}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
