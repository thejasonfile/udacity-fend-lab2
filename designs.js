// Select color input
const colorInput = document.querySelector("#colorPicker");
// Select size input
const inputHeight = document.querySelector("#inputHeight");
const inputWidth = document.querySelector("#inputWidth");
// Select Grid Canvas
const gridParent = document.querySelector("#pixelCanvas");
// Select Submit Button
const submitButton = document.querySelector("input[type='submit']");

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  makeGrid()
});

function addColor(e) {
  e.target.style.backgroundColor = colorInput.value;
}

function makeGrid() {
  //clear existing Grid
  gridParent.innerHTML = "";
  //make new Grid
  for (let i = inputHeight.value; i > 0; i--) {
    const newRow = document.createElement("tr");
    gridParent.appendChild(newRow);
    for (let j = inputWidth.value; j > 0; j--) {
      const currentRow = gridParent.lastChild;
      const newData = document.createElement("td");
      currentRow.appendChild(newData);
    }
  }
  gridParent.addEventListener("click", addColor);
}
