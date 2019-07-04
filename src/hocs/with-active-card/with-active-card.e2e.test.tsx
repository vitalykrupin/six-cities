import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withActiveCard from './with-active-card';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withActiveCard(Mock);

it(`Should change activeCard`, () => {
  const wrapper = Enzyme.shallow(<MockWrapped
    activeCard={null}
    onPlaceClick={jest.fn()}
    city={{}}
  />);

  expect(wrapper.state().activeCard).toEqual(null);
  expect(wrapper.props().activeCard).toEqual(null);
  wrapper.props().onPlaceClick({type: 8});
  expect(wrapper.state().activeCard).toEqual({type: 8});
  expect(wrapper.props().activeCard).toEqual({type: 8});
});
