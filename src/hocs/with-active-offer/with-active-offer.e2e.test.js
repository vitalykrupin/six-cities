import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveOffer from "./with-active-offer.jsx";

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapper = withActiveOffer(MockComponent);

it(`Should change active element when call handleClick`, () => {
  const wrapper = shallow(<MockComponentWrapper />);

  expect(wrapper.props().activeOffer).toEqual({});
  wrapper.props().handleClick({title: `Small room`});
  expect(wrapper.props().activeOffer).toEqual({title: `Small room`});
});
