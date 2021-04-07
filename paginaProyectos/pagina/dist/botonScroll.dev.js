"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = scrollTopButton;
var d = document,
    w = window;

function scrollTopButton(btn) {
  var $scrollBtn = d.querySelector(btn);
  w.addEventListener("scroll", function (e) {
    var scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 1031) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    } //console.log(w.pageYOffset, d.documentElement.scrollTop);

  });
  d.addEventListener("click", function (e) {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0
      });
    }
  });
}