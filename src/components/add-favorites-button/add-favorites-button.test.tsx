import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {AddFavoritesButton} from './add-favorites-button';

const place = {
  id: 1,
  title: `Strange place`,
  isPremium: true,
  price: 1200,
  rating: 1.9,
  isFavorite: false,
  description: ``,
  type: `Apartment`,
  previewImage: ``,
  images: [``],
  goods: [``],
  bedrooms: 2,
  maxAdults: 4,
  host: {
    id: 3,
    name: `Alice`,
    isPro: false,
    avatarUrl: `path`
  },
  location: {
    latitude: 12,
    longitude: 87,
    zoom: 11,
  },
  city: {
    name: `Berlin`,
    location: {
      latitude: 51,
      longitude: 7,
      zoom: 11,
    },
  },
};

describe(`AddFavoritesButton`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
          <AddFavoritesButton
            place={place}
            addToFavorites={jest.fn()}
            deleteFromFavorites={jest.fn()}
            isAuthorizationRequired={true}
            className={`property`}
            fromRoom={false}
            history={{push: jest.fn()}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
