import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from '../sign-in/sign-in';

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<SignIn submitForm={jest.fn()} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
