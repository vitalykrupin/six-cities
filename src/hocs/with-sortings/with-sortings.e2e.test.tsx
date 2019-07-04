import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withSortings from './with-sortings';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withSortings(Mock);

it(`Should change opened by click on form and by removing mouse from form`, () => {
  const wrapper = Enzyme.shallow(<MockWrapped
    onSortingsClick={jest.fn()}
    onMouseLeave={jest.fn()}
    opened={false}
  />);

  expect(wrapper.state().opened).toEqual(false);
  wrapper.props().onSortingsClick();
  expect(wrapper.state().opened).toEqual(true);
  wrapper.props().onMouseLeave();
  expect(wrapper.state().opened).toEqual(false);
});
