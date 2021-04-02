"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortCuts = void 0;
var d = document;

var shortCuts = function shortCuts(e) {
  console.log(e);
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.ctrlKey);
  console.log(e.altKey);

  if (e.key === "a" && e.ctrlKey) {
    alert("Presionas a y ctrl !");
  }
};

exports.shortCuts = shortCuts;