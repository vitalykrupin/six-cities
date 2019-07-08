import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from './header';
import {BrowserRouter} from 'react-router-dom';

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              user={{
                id: 1,
                email: `my@ya.ru`,
                name: `Vitaly`,
                avatarUrl: `path`,
                isPro: false
              }}
              isAuthorizationRequired={true}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
