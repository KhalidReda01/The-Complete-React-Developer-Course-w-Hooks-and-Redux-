// // CFSC  ES6 import export
// // import './utils.js'
// // import {square,add }from'./utils.js'
// // console.log("this time from SC")
// // console.log(square(4))
// // console.log(add(4,5))

// // import the function that we export from the person.j
// // import subtract,{ isAdult,canDrink } from './person'
// import isSenior from './person'
// // import { add,square } from './utils'
// // console.log(isAdult(14))
// // console.log(canDrink(21))
// // use it here
// // Yes I know hah that I'm using silly comments but that's the point I want to get used to that to became to understand that later and remember it Okay you are studing and this is part of your learning process and you are alone at this just you and the course so who care
// // console.log(subtract(5, 4))// 1 Okay Its's working let's do the challenge one too

// // print the console result for the challenge
// console.log(isSenior(70))
 // CFSC 53 Importing npm Moduels
  // install the modeule then import it then use it so easy now let's do it 
  // npm valiator 
// // you installed it then import it 
// import valiator from "validator";
// // then use it It's working 
// console.log(valiator.isEmail('test@gamil.com'))
// // now react and reactDom 
console.log("app.js CFSC is runing")
// install it yarn add recat react-dom but with the specific version done
// then import it 
import React from "react";

// import ReactDOM from "react"; // here as show in the eorr you missed the -dom 
import ReactDOM from "react-dom";
// then use it
// const template = <p> Hello React </p> this is not working I know this gonna work the next lecture conver jsx to regular js using babel but not babel cli I think he used babel core we will see don't worry
// talking to yourself is gooda and even imagine that you are explaing this to your self isn't bad
/**
 * CFSC setting up babel wit wepack 
 * first I installed babel-core and babel-loader using this command
 * yarn add babel-core@6.25.0 babel-loader@7.1.1
 * then at the webpack.config.js  module 
 * module: [{
    loader: 'babel-loader',
    test: /.\.js$/,
    exculde:/node_modules/
  }]
  after htat you will need to tell babel the to use the env and rect presets 
 */
// const template = React.createElement('p', {},"Hello React") // now after we sethup babel with wepback
/**
 * $ yarn run build
yarn run v1.22.5
$ webpack  --watch
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.module should be an object.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
 */
/** the error was here at webpack config file
 * 
 *  module: [{
    loader: 'babel-loader',
    test: /.\.js$/,
    exculde:/node_modules/
  }]
  this is the right you need  to split this and understand why every thing exist 
  
 */
const template = <p>Hello React with webpack</p>;

ReactDOM.render(template, document.getElementById('app'))
// I solved it Good now hello React successfull renderd to the screen 