import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {SignIn} from './sign-in';

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
        <SignIn 
          submitForm={jest.fn()}
          user={{
            id: 2,
            email: `y@ya.ru`,
            name: `Alice`,
            avatarUrl: `path`,
            isPro: false
          }}
          history={{push: jest.fn()}}
          authError={`no`}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
