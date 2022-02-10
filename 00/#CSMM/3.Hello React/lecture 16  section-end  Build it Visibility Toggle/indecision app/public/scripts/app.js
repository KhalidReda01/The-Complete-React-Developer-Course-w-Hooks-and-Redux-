"use strict";

// 21/16 Build it Visibility Toggle CFSC4
var visibility = false;
var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
  console.log("test");
};
var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibility },
      visibility ? "Hide detail" : "Show details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey these are som details you can see now"
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};
render();
