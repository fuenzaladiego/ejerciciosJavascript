"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countdown = countdown;
var d = document;

function countdown(id, limitDate, finalMessage) {
  var $countdown = d.getElementById(id),
      $countdownDate = new Date(limitDate).getTime();
  var countdownTempo = setInterval(function () {
    var now = new Date().getTime(),
        limitTime = $countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
        minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
        seconds = ("0" + Math.floor(limitTime % (1000 * 60) / 1000)).slice(-2);
    $countdown.innerHTML = "<h3>Faltan: ".concat(days, " dias ").concat(hours, " horas ").concat(minutes, " minutos ").concat(seconds, " segundos</h3>");

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = "<h3>".concat(finalMessage, "</h3>");
    }
  }, 1000);
}