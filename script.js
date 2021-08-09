// Reference of elements

let click = document.getElementById("click");
let display_background_color = document.getElementById(
  "display_background_color"
);
let background_color = document.getElementById("background_color");
let color_name = document.getElementById("color_name");

// Arrays

let color_flipper = [
  "red",
  "green",
  "blue",
  "orange",
  "grey",
  "lime",
  "yellow",
  "pink",
  "gold",
  "darkblue",
  "seagreen",
  "white",
  "brown",
  "skyblue",
  "violet",
  "darkgreen",
];

// Event Listeners

click.addEventListener("click", function () {
  let index = Math.floor(Math.random() * 16); // generate random numbers from 0 to 9
  document.body.style.backgroundColor = `  ${color_flipper[index]}`;

  color_name.innerText = color_flipper[index];
  color_name.style.color = color_name[index];
});
