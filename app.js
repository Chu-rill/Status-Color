const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
  "#C0C0C0",
  "#808080",
  "#800000",
  "#808000",
  "#008000",
  "#800080",
  "#008080",
  "#000080",
  "#FFA07A",
  "#FA8072",
  "#E9967A",
  "#F08080",
  "#CD5C5C",
  "#DC143C",
  "#B22222",
  "#8B0000",
  "#FF7F50",
  "#FF6347",
  "#FF4500",
  "#FFD700",
  "#FFA500",
  "#FF8C00",
  "#FF69B4",
  "#FF1493",
  "#FFC0CB",
  "#FFB6C1",
  "#FF69B4",
  "#FF1493",
  "#DB7093",
  "#C71585",
  "#B0E0E6",
  "#ADD8E6",
  "#87CEEB",
  "#87CEFA",
  "#00BFFF",
  "#1E90FF",
  "#6495ED",
  "#7B68EE",
  "#4169E1",
  "#0000FF",
  "#0000CD",
  "#00008B",
  "#000080",
  "#191970",
  "#4682B4",
  "#5F9EA0",
  "#7FFFD4",
  "#66CDAA",
  "#00CED1",
  "#20B2AA",
  "#008B8B",
  "#008080",
  "#008000",
  "#006400",
  "#00FA9A",
  "#00FF7F",
  "#3CB371",
  "#2E8B57",
  "#228B22",
  "#008000",
  "#6B8E23",
  "#556B2F",
  "#808000",
  "#BDB76B",
  "#EEE8AA",
  "#F0E68C",
  "#FFFF00",
  "#FFD700",
  "#FFA500",
  "#FF8C00",
  "#FFDAB9",
  "#EEE8AA",
  "#FFDEAD",
  "#FFE4B5",
  "#F5DEB3",
  "#DEB887",
  "#D2B48C",
  "#BC8F8F",
  "#F4A460",
  "#DAA520",
  "#B8860B",
  "#CD853F",
  "#D2691E",
  "#8B4513",
  "#A0522D",
  "#A52A2A",
  "#800000",
  "#FFFFFF",
  "#FFFAFA",
  "#F0FFF0",
  "#F5FFFA",
  "#F0FFFF",
  "#F0F8FF",
  "#F8F8FF",
  "#F5F5F5",
  "#FFF5EE",
  "#F5F5DC",
  "#FDF5E6",
  "#FFFAF0",
  "#FFFFF0",
  "#FAEBD7",
];
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let cover = document.querySelector(".cover");

// let randIndex = Math.floor(Math.random() * colors.length);
// let randColor = colors[randIndex];
function getRandomColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  return colors[randIndex];
  console.log(randColor);
}

button1.addEventListener("click", () => {
  console.log("Button clicked");
  cover.style.width = "100vw";
  cover.style.display = "block";
  button2.style.display = "block";
  button3.style.display = "block";
  button1.style.display = "none";
});
button3.addEventListener("click", () => {
  cover.style.width = "0";
  cover.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button1.style.display = "block";
});
button2.addEventListener("click", () => {
  cover.style.backgroundColor = getRandomColor();
});
