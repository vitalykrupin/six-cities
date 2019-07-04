import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import FavoritesEmpty from './favorites-empty';

describe(`FavoritesEmpty`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FavoritesEmpty />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
