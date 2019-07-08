import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Place} from './place';

Enzyme.configure({adapter: new Adapter()});
const offers = [
  {
    id: 1,
    title: `Strange place`,
    isPremium: true,
    price: 1200,
    rating: 1.5,
    isFavorite: false,
    description: ``,
    type: `Apartment`,
    previewImage: `2.jpg`,
    images: [`3.jpg`],
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
    isFavorite: false,
    description: ``,
    type: `Private room`,
    previewImage: `6.jpg`,
    images: [`5.jpg`],
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
const mockObj = {
  id: 1,
  title: `Strange place`,
  isPremium: true,
  price: 1200,
  rating: 1.9,
  isFavorite: false,
  description: ``,
  type: `Apartment`,
  previewImage: `7.jpg`,
  images: [`6.jpg`],
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
  }
};

let handleClick;
let placeElement;
let placeDescription;
let image;
let placeObj = {};

beforeEach(() => {
  handleClick = jest.fn();
  placeElement = Enzyme.shallow(
      <Place
        offers={offers}
        place={mockObj}
        onPlaceClick={() => {
          placeObj = mockObj;
        }}
      />);
  placeDescription = placeElement.find(`Link`);
  image = placeElement.find(`.place-card__image-wrapper a`);
});

describe(`Before clicking`, () => {
  it(`should have the description element`, () => {
    expect(placeDescription).toHaveLength(1);
  });

  it(`handleClick should not be called`, () => {
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});

describe(`Link should go`, () => {
  it(`to the right path`, () => {

    expect(placeDescription.props().to).toBe(`/offer/1`);
  });
});


it(`Click on image should put in state right object`, () => {
  image.simulate(`click`);

  expect(placeObj).toEqual(mockObj);
});
