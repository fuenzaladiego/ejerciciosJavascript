"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveBall = moveBall;
exports.shortCuts = void 0;
var d = document;
var x = 0,
    y = 0;

function moveBall(e, ball, stage) {
  var $ball = d.querySelector(ball),
      $stage = d.querySelector(stage),
      $limiteBall = $ball.getBoundingClientRect(),
      $limiteStage = $stage.getBoundingClientRect();
  console.log($limiteBall, $limiteStage);

  switch (e.keyCode) {
    case 37:
      e.preventDefault();

      if ($limiteBall.left > $limiteStage.left) {
        e.preventDefault();
        x--;
      }

      break;

    case 38:
      e.preventDefault();

      if ($limiteBall.top > $limiteStage.top) {
        e.preventDefault();
        y--;
      }

      break;

    case 39:
      e.preventDefault();

      if ($limiteBall.right < $limiteStage.right) {
        e.preventDefault();
        x++;
      }

      break;

    case 40:
      if ($limiteBall.bottom < $limiteStage.bottom) {
        e.preventDefault();
        y++;
      }

      break;

    default:
      break;
  }

  $ball.style.transform = "translate(".concat(x * 10, "px, ").concat(y * 10, "px)");
}

var shortCuts = function shortCuts(e) {
  console.log(e.keyCode);
  /*console.log(e);
  console.log(e.type);
  console.log(e.key);
   console.log(e.ctrlKey);
  console.log(e.altKey);
  */

  if (e.key === "a" && e.ctrlKey) {
    alert("Presionas a y ctrl !");
  }
};

exports.shortCuts = shortCuts;