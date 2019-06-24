import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withSorted from './with-sorted';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withSorted(Mock);
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
    previewImage: ``,
    images: [``],
    goods: [``],
    bedrooms: 2,
    maxAdults: 4,
    host: {},
    location: {
      atitude: 12,
      longitude: 87,
      zoom: 11,
    },
    city: {
      name: `Berlin`,
      location: {
        atitude: 51,
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
    previewImage: ``,
    images: [``],
    goods: [``],
    bedrooms: 2,
    maxAdults: 4,
    host: {},
    location: {
      atitude: 13,
      longitude: 88,
      zoom: 11,
    },
    city: {
      name: `Berlin`,
      location: {
        atitude: 52,
        longitude: 8,
        zoom: 11,
      },
    },
  },
];

it(`Should sort offers by price`, () => {
  const wrapper = shallow(<MockWrapped
    onSortingClick={jest.fn()}
    sortedOffers={[]}
    activeSorting={0}
    offers={offers}
    city={{
      name: `Berlin`,
    }}
  />);

  expect(wrapper.state().sortedOffers).toEqual([]);
  expect(wrapper.props().activeSorting).toEqual(0);
  wrapper.props().onSortingClick(1);
  expect(wrapper.state().sortedOffers).toEqual(
      [
        {
          id: 2,
          title: `Weird place`,
          isPremium: true,
          price: 800,
          rating: 1.5,
          isFavorite: false,
          description: ``,
          type: `Private room`,
          previewImage: ``,
          images: [``],
          goods: [``],
          bedrooms: 2,
          maxAdults: 4,
          host: {},
          location: {
            atitude: 13,
            longitude: 88,
            zoom: 11,
          },
          city: {
            name: `Berlin`,
            location: {
              atitude: 52,
              longitude: 8,
              zoom: 11,
            },
          },
        },
        {
          id: 1,
          title: `Strange place`,
          isPremium: true,
          price: 1200,
          rating: 1.5,
          isFavorite: false,
          description: ``,
          type: `Apartment`,
          previewImage: ``,
          images: [``],
          goods: [``],
          bedrooms: 2,
          maxAdults: 4,
          host: {},
          location: {
            atitude: 12,
            longitude: 87,
            zoom: 11,
          },
          city: {
            name: `Berlin`,
            location: {
              atitude: 51,
              longitude: 7,
              zoom: 11,
            },
          },
        },
      ]
  );
  wrapper.props().onSortingClick(2);
  expect(wrapper.state().sortedOffers).toEqual([
    {
      id: 1,
      title: `Strange place`,
      isPremium: true,
      price: 1200,
      rating: 1.5,
      isFavorite: false,
      description: ``,
      type: `Apartment`,
      previewImage: ``,
      images: [``],
      goods: [``],
      bedrooms: 2,
      maxAdults: 4,
      host: {},
      location: {
        atitude: 12,
        longitude: 87,
        zoom: 11,
      },
      city: {
        name: `Berlin`,
        location: {
          atitude: 51,
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
      previewImage: ``,
      images: [``],
      goods: [``],
      bedrooms: 2,
      maxAdults: 4,
      host: {},
      location: {
        atitude: 13,
        longitude: 88,
        zoom: 11,
      },
      city: {
        name: `Berlin`,
        location: {
          atitude: 52,
          longitude: 8,
          zoom: 11,
        },
      },
    },
  ]);
});
