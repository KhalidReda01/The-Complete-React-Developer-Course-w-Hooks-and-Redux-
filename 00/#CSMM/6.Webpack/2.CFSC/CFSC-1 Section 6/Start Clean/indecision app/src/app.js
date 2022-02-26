// // CFSC  One Component per file
/**
 * Here all what I do at this CFSC is so simple I will just split  our Indecision app into mulitple component and make sure that the project is working fine
 * let's how  you will do that 
 * first you will take every compoent and put it into a file then export it as default then you will import it from that foler at the app.js then you will switch it to the indecision app our main component 
 * Okay do it 
 */

// // now react and reactDom 
console.log("app.js CFSC is runing")
 
import React from "react";

import ReactDOM from "react-dom";
// // import the first componet that you create done work well
// import AddOption from "./components/AddOption";
// // import the second componet that you create the option compoent done work well
// // take this import to the compoent that you just create then export it here

// import Options from "./components/Options";
// // working well  done
// // import Action compoent
// import Action from "./components/Action";
// // Import the header compoent
// import Header from "./components/Header";
// // Now you only have to do that with our main component

// Now you have to transfere all this and adjust the location to work done then import indecision app here
import IndecisionApp from './components/IndecisionApp'
// Now works fine and CFSC done work well 

 
  
  
  
  
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
