import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withHoverItem from './with-hover-item';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withHoverItem(Mock);

it(`Should change hover item`, () => {
  const wrapper = shallow(<MockWrapped
    setHoverItem={jest.fn()}
  />);

  wrapper.props().setHoverItem(`Cologne`);
  expect(wrapper.props().active).toEqual(`Cologne`);
});
