"use strict";

//  21/16 Build it Visibility Toggle CFSC3
var visibility = true;
var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
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
      visibility ? "Hide Details" : "Show details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey . These are some details you can now see !"
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
