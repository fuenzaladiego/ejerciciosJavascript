"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hamburgerMenu;

function hamburgerMenu(panelBtn, panel, menuLink) {
  var d = document;
  d.addEventListener("click", function (e) {
    if (e.target.matches(panelBtn) || e.target.matches("".concat(panelBtn, " *"))) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    } //Para cerrar el menu cuando seleccionamos una opcion


    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}