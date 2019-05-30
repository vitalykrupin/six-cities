import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withActiveItem(Mock);

it(`Should change active item`, () => {
  const wrapper = shallow(<MockWrapped
    activeItem={{}}
    onMouseEnter={jest.fn()}
  />);

  expect(wrapper.state().activeItem).toEqual({});
  expect(wrapper.props().activeItem).toEqual({});
  wrapper.props().onMouseEnter({type: 8});
  expect(wrapper.state().activeItem).toEqual({type: 8});
  expect(wrapper.props().activeItem).toEqual({type: 8});
});
