let color = "black";
let click = false;

window.addEventListener("load", function() {
  createBoard(16);
  
  document.querySelector("body").addEventListener("click", function(e) {
    if(e.target.tagName != "BUTTON") {
      click = !click;
    }
  })

  let changeGridBtn = document.getElementById("popup");
  changeGridBtn.addEventListener("click", function() {
    let size = getSize();
    createBoard(size);
  });

  function createBoard(size) {
    const board = document.querySelector(".container");
  
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
  
    let numDivs = size * size;
  
    for (let i = 0; i < numDivs; i++) {
      const cell = document.createElement('div');
      cell.style.border = "0.5px black dotted";
      cell.classList.add("grid-item");
      board.appendChild(cell);
      cell.addEventListener("mouseover", colorDiv);
      cell.addEventListener('mousedown', colorDiv);
      
    }
  }
  
  function getSize() {
    clearBoard();
    let input = document.querySelector("input[name=new-grid]");
    return input.value;
  }

  function clearBoard() {
    let board = document.querySelector(".container");
    board.innerHTML = ""; 
  }
 
});

function colorDiv() {
  let colorInput = document.getElementById("colorInput");
  if(click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = colorInput.value;
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}