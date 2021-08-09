// Reference of elements

let click = document.getElementById("click");
let display_background_color = document.getElementById(
  "display_background_color"
);
let background_color = document.getElementById("background_color");
let color_name = document.getElementById("color_name");

// array

let hex_array = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "Z",
];

click.addEventListener("click", function () {
  let index = Math.floor(Math.random() * hex_array.length); // generate random numbers from 0 to 9
  let generate_color_name = "#";

  for (let i = 0; i < 2; i++) {
    generate_color_name += hex_array[index];
  }

  if (index + 2 < hex_array.length) {
    for (let i = 0; i < 2; i++) {
      generate_color_name += hex_array[index + 2];
      generate_color_name += hex_array[index + 1];
    }
  }

  color_name.innerText = generate_color_name;
  document.body.style.backgroundColor = generate_color_name;
  console.log(generate_color_name);
});
