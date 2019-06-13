import * as React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

Enzyme.configure({adapter: new Adapter()});

const mockData = {
  title: `Beautiful, luxurious apartment at great location`,
  type: `Apartment`,
  image: `img/apartment-01.jpg`,
  price: `120`,
  rate: 93,
};

it(`click on title correctly works`, () => {
  const clickHandler = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        title={mockData.title}
        type={mockData.type}
        image={mockData.image}
        price={mockData.price}
        rate={mockData.rate}
        onBtnClick={clickHandler}
      />
  );

  const titleButton = placeCard.find(`.place-card__name a`);
  titleButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
