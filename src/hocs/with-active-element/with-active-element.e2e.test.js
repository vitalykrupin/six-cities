import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveElement from "./with-active-element.jsx";

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapper = withActiveElement(MockComponent);

it(`Should change active element when call handleClick`, () => {
  const wrapper = shallow(<MockComponentWrapper />);

  expect(wrapper.props().activeElement).toEqual(``);
  wrapper.props().handleClick(`Small room`);
  expect(wrapper.props().activeElement).toEqual(`Small room`);
});
