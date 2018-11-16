import PropTypes from "prop-types";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import sum from './sum';

console.log('yo');

const result = sum(5,4);
console.log(result);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);