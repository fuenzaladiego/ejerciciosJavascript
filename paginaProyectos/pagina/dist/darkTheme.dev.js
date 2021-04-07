"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkTheme = darkTheme;
var d = document;

function darkTheme(btn, classDark) {
  var $btn = d.querySelector(btn),
      $selectors = d.querySelectorAll("[data-dark]"); //console.log($selectors);

  var moon = "🌙",
      sun = "☀️";
  d.addEventListener("click", function (e) {
    if (e.target.matches(btn)) {
      if ($btn.textContent == moon) {
        $selectors.forEach(function (el) {
          return el.classList.add(classDark);
        });
        $btn.textContent = sun;
      } else {
        $selectors.forEach(function (el) {
          return el.classList.remove(classDark);
        });
        $btn.textContent = moon;
      }
    }
  });
}