const container = document.getElementById('container');
const userInputRow = document.getElementById("rows");
const userInputColumn = document.getElementById("cols");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    //cell.innerText = (c + 1); //displays cell number
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

updateGrid = () => {
  container.innerHTML = "";
  container.style.setProperty(
    "grid-template-columns",
    `repeat(${userInputColumn.value}, 2fr)`
    );
  container.style.setProperty(
    "grid-template-rows",
    `repeat(${userInputRow.value}, 2fr)`
    );
}

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.add("hover");
})