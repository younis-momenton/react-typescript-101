import * as React from "react";

export interface HelloWorldProps {
    name: string;
}

export default class HelloWorld extends React.Component<HelloWorldProps,{}> {
    render() {
        return <div><h1>Hello World from {this.props.name}</h1></div>;
    }
}