var firstButton = document.getElementById("3D");
var secondButton = document.getElementById("Projects");
var thirdButton = document.getElementById("YouTube");

firstButton.addEventListener("click", function () {
  window.open("https://www.artstation.com/garajnik", "_blank");
});

secondButton.addEventListener("click", function () {
  window.open("https://github.com/Garajnik", "_blank");
});

thirdButton.addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/channel/UCDLOBx52mxQfFNkl9R14_yw",
    "_blank"
  );
});
