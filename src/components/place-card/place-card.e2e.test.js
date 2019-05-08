import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

Enzyme.configure({adapter: new Adapter()});

it(`click on title correctly works`, () => {
  const clickHandler = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        title={`Some title`}
        onBtnClick={clickHandler}
      />
  );

  const titleButton = placeCard.find(`.place-card__name a`);
  titleButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
