const container = document.querySelector(".container");
const body = document.body;

body.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const offsetX = window.innerWidth / 2 - mouseX;
  const offsetY = window.innerHeight / 2 - mouseY;

  const percentX = (mouseX / window.innerWidth) * 100;
  body.style = `background: linear-gradient(${percentX}deg, rgba(48,47,60,1) 0%, rgba(90,68,99,1) 100%);`;

  container.style.transform = `translate(${offsetX / 30}px, ${offsetY / 30}px)`;
});

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
