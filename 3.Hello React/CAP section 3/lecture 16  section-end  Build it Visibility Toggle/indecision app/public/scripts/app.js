'use strict';

/**
 * 21/16 Build It Visibilty Toggle
 * create h1 tag visibility Toggle
 * create a show details button
 */

// that's what I'm taking about practice practice practice  is the solution not just watching and code along and practice
// const showDetails = () => {
//   let getButton = document.querySelector('.onclicked')
//   let getDetails = document.querySelector('.btn-details')
//   console.log(getDetails.innerHTM==="Show details")
//   if (getDetails.innerHTM==="Show details") {
//     getButton.innerHTML = "test"
//   getDetails.innerHTML="Show details"
//   } else if(getDetails.innerHTM==="Hide details") {
//     getButton.innerHTML = "<p>Hey. These are some details you can now see!</p>"
//     getDetails.innerHTML="Hide details"
//   }


//   render()
// }
// const hideDetails=() => {
//   document.querySelector('.onclicked').innerHTML = "<p>Hey. These are some details you can now see!</p>"
//   document.querySelector('.btn-details').innerHTML="Hide details"
// }
// const appRoot = document.getElementById('app')

// const render = () => {
//   const template = (<div>
//     <h1>Visibilty Toggle</h1>
//     <button className='btn-details' onClick={showDetails }>{"Show details"}</button>
//     {<p className='onclicked'></p>
// }

// </div>

//   );
//   ReactDOM.render(template, appRoot)
// }


// render()
// This idea is the closer to my mind actually
// Andrea Solution
var visibility = false;
var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};
var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibilty Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide detail' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey . These are some details you can now see!'
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};
render();
