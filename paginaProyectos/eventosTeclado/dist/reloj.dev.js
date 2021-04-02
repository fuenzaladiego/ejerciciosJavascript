"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.digitalClock = digitalClock;
exports.alarm = alarm;
var d = document;

function digitalClock(clock, btnPlay, btnStop) {
  var clockTempo;
  d.addEventListener("click", function (e) {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(function () {
        var clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = "<h3>".concat(clockHour, "</h3>");
      }, 1000); //Desabilitamos el boton

      e.target.disabled = true;
    } else if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

function alarm(sound, btnPlay, btnStop) {
  var alarmTempo;
  var $alarm = d.createElement("audio");
  $alarm.src = sound;
  d.addEventListener("click", function (e) {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(function () {
        $alarm.play();
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}