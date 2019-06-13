import * as React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';

const mockData = {
  title: `Beautiful, luxurious apartment at great location`,
  type: `Apartment`,
  image: `img/apartment-01.jpg`,
  price: `120`,
  rate: 93,
};

it(`Main screen correctly renders`, () => {
  const tree = renderer
    .create(<PlaceCard
      title={mockData.title}
      type={mockData.type}
      image={mockData.image}
      price={mockData.price}
      rate={mockData.rate}
      onBtnClick={() => null}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
