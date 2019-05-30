import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveCard from './with-active-item';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withActiveCard(Mock);

it(`Should change activeCard`, () => {
  const wrapper = shallow(<MockWrapped
    activeCard={{}}
    onMouseEnter={jest.fn()}
  />);

  expect(wrapper.state().activeCard).toEqual({});
  expect(wrapper.props().activeCard).toEqual({});
  wrapper.props().onMouseEnter({type: 8});
  expect(wrapper.state().activeCard).toEqual({type: 8});
  expect(wrapper.props().activeCard).toEqual({type: 8});
});
