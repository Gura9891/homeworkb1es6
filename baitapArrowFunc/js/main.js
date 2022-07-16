const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let buttonListColor = () => {
  let content = "";
  for (let index = 0; index < colorList.length; index++) {
    if (index == 0) {
      content +=
        "<button class='color-button " +
        colorList[index] +
        " active'></button>";
    } else {
      content +=
        "<button class='color-button " + colorList[index] + "'></button>";
    }
  }
  document.querySelector("#colorContainer").innerHTML = content;
};
buttonListColor();
//pickcolor
let pickColor = document.getElementsByClassName("color-button");

for (let index = 0; index < pickColor.length; index++) {
  pickColor[index].addEventListener("click", function () {
    changeColor(colorList[index], index);
  });
}
//changecolor
let changeColor = (color, pick) => {
  for (let index = 0; index < pickColor.length; index++) {
    pickColor[index].classList.remove("active");
  }
  pickColor[pick].classList.add("active");
  document.querySelector("#house").className = "house " + color;
};
