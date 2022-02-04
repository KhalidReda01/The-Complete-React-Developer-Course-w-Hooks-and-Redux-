'use strict';

console.log('App.js is running! ');

// JSX - JavaScript XML
// setting up Babel

// var template = React.createElement("h1", {
//   id: "someid"
// }, "Does this change!?");
var template = React.createElement(
  'h1',
  { id: 'someid' },
  'indecision app '
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

/**
 * 
 * // console.log('App.js is running! ')

// JSX - JavaScript XML
// setting up Babel
/**
 * Preset is just a group of plugins babel es2015 react 
 * you can learn about Babel plugins Docs plugins 
 * env preset give access to(es2015 16 17) https://babeljs.io/docs/en/
 * yarn global add babel-cli
 * yarn global add babel-cli@6.24.1 // sepcific version 
 * cli -> command line interface 
 * npm install -g bable-cli@6.24.1
 * command line added 
 * babel --help 
 * // install presets react env
 * yarn init  -> set up our project to use yarn 
 * // Error invalid  packaage name
 *  * yarn init -y // I used npm init instead Mansour Koura say use this but It didn't work but I decided to repeat install yarn and volla It works 
 *  // strange this error fiexd after using this npm install -g yarn@0.24.5
 * This wil create a file called  package.json the yarn comand make it a litte easer to get setup
 * package.json
 * {
  "name": "indecision-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",  
  "author": "khalid Reda ",
  "license": "ISC"
}

####
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2 this or you can use two different command
yarn add babel-preset-react@6.24.1 
yarn add babel-preset-env@1.5.2
* new file created called node_modules yarn.lock
 "dependencies": {
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1"
  }
  this dependecies added to the package.json
 */

// then create a src folder add app.js file and cut these code and add there wher or commend here and add them there
// var template = React.createElement("h1", {
//   id: "someid"
// }, "This is JSX from app.js");
// var appRoot = document.getElementById('app')
// ReactDOM.render(template, appRoot)

//// This code these comment can't be here Okay take it Okay I cut it from app.js scripts and add it to app.js src
/// This lecture is little confusing
//$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react
//up arrow key you can use the same command line add --watch
// the instructor deleted the node_modules and
//$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// can't work
// so you have to yarn install to regenerate node modules
