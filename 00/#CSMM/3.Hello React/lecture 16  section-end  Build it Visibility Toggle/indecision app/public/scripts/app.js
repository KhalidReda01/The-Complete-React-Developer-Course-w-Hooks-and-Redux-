"use strict";

var visibilty = false;
var toggleVisibilty = function toggleVisibilty() {
  visibilty = !visibilty;
  console.log(visibilty, !visibilty);
  render();
};
var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "visibilty Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibilty },
      visibilty ? "Hide detail" : "Show details"
    ),
    visibilty && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey . These are some details you can now see!"
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};
render();
