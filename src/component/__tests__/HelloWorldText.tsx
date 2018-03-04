import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

const HelloWorld = require("../HelloWorld");

it("renders with crashing", () => {
    const helloWorld = TestUtils.renderIntoDocument(
        <HelloWorld name="Younis" />
    );

    const helloWorldNode = ReactDOM.findDOMNode(helloWorld);

    expect(helloWorldNode.textContent).toEqual("Hello World from Younis");
})