"use strict";

var _script = _interopRequireDefault(require("./script.js"));

var _reloj = require("./reloj.js");

var _eventosTeclado = require("./eventosTeclado.js");

var _countDown = require("./countDown.js");

var _botonScroll = _interopRequireDefault(require("./botonScroll.js"));

var _darkTheme = require("./darkTheme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var d = document;
/*
    El teclado tiene 3 eventos keyUp (tecla suelta)
    keyPress (Siendo presionada)
    keyDown (cuando se presiona)
*/

d.addEventListener("DOMContentLoaded", function (e) {
  (0, _script["default"])(".panel-btn", ".panel", ".menu a");
  (0, _reloj.digitalClock)("#reloj", "#activar-reloj", "#desactivar-reloj");
  (0, _reloj.alarm)("./alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  (0, _countDown.countdown)("countdown", "Nov 30, 2021 11:30:00", "Feliz cumple Diego");
  (0, _botonScroll["default"])(".scroll-top-btn");
  (0, _darkTheme.darkTheme)(".dark-theme-btn", "dark-mode");
});
d.addEventListener("keydown", function (e) {
  (0, _eventosTeclado.shortCuts)(e);
  (0, _eventosTeclado.moveBall)(e, ".ball", ".stage");
});