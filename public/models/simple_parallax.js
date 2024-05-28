import simpleParallax from "simple-parallax-js";

window.addEventListener("DOMContentLoaded", (event) => {
  var image = document.getElementsByClassName("parallax");
  new simpleParallax(image, {
    orientation: "down",
    scale: 2,
    overflow: true,
  });
});
