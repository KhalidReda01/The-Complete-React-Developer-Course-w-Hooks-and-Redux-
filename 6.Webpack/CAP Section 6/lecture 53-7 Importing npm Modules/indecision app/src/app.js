
//Import npm moduels
// install ->import -> use
// npm validator
//https://www.npmjs.com/package/validator
// yarn add validator@8.0.0

// import validator from "validator";
// console.log(validator.isEmail('test@gmail.com'))
// Why you are distracting yourself Close anything and just Focus for some time the world will be the same don't worry hahahahah Now keep going welcome back
//npm react
//https://www.npmjs.com/package/react
// npm react-dom
//https://www.npmjs.com/package/react-dom


// yarn add react@16.0.0 react-dom@16.0.0
console.log('app.js is runing')

import React from 'react';
import ReactDOM from 'react-dom';
// const template = <p>test1234</p>
const template = React.createElement('p', {},'testing 123')
ReactDOM.render(template,document.getElementById('app'))