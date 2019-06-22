import React, {Component} from 'react';

// props are the attributes
const Person = (props) => {
    return <p>I'm a {props.name} and I am {props.age} years old!!</p>
};

export default Person;