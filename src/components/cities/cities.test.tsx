import * as React from 'react';
import renderer from 'react-test-renderer';
import Cities from './cities';

describe(`Cities`, () => {
  const cities = [`Berlin`, `Dusseldorf`];

  it(`renders correctly`, () => {
    const tree = renderer
      .create(
        <Cities
          cities={cities}
          city={{
            name: `Berlin`,
            location: {
              latitude: 51,
              longitude: 7,
              zoom: 11
            }
          }}
          onCityClick={jest.fn()}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
