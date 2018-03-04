import * as React from 'react';
import { shallow } from "enzyme";
import * as ReactTestRenderer from 'react-test-renderer';

import HelloWorld from "../HelloWorld";

it("renders with crashing", () => {
    const wrapper = shallow(<HelloWorld name="test"/>);
});

it("component rendering compared to the snapshot", () => {
    const wrapper = ReactTestRenderer.create(<HelloWorld name="test"/>);
    expect(wrapper).toMatchSnapshot();
});