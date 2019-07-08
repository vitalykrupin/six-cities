import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Map from './map';
import leafletMock from '../../mocks/leaflet-mock';

describe(`Map`, () => {
  const places = [
    {
      id: 1,
      title: `Strange place`,
      isPremium: true,
      price: 1200,
      rating: 1.8,
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
        email: `t@ya.ru`,
        name: `Alice`,
        avatarUrl: `path`,
        isPro: true
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
    },
    {
      id: 2,
      title: `Weird place`,
      isPremium: true,
      price: 800,
      rating: 1.5,
      isFavorite: true,
      description: ``,
      type: `Private room`,
      previewImage: ``,
      images: [``],
      goods: [``],
      bedrooms: 2,
      maxAdults: 4,
      host: {
        id: 2,
        email: `y@ya.ru`,
        name: `Alice`,
        avatarUrl: `path`,
        isPro: false
      },
      location: {
        latitude: 13,
        longitude: 88,
        zoom: 11,
      },
      city: {
        name: `Dusseldorf`,
        location: {
          latitude: 52,
          longitude: 8,
          zoom: 11,
        },
      },
    },
  ];


  it(`renders correctly`, () => {
    const tree = renderer
      .create(
          <Map
            offers={places}
            city={places[0].city}
            leaflet={leafletMock}
            activeCard={places[0]}
            className={`no`}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
