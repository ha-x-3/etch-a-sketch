window.addEventListener("load", function() {
  createBoard(16);

  let changeGridBtn = document.getElementById("popup");
  changeGridBtn.addEventListener("click", function() {
    let size = getSize();
    createBoard(size);
  })

  function createBoard(size) {
    let board = document.querySelector(".container");
  
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
  
    let numDivs = size * size;
  
    for (let i = 0; i < numDivs; i++) {
      let cell = document.createElement('div');
      cell.style.border = "0.5px black dotted";
      board.appendChild(cell).className = "grid-item";
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
 

})

// const square = document.querySelector(".grid-item");
// square.addEventListener("mouseover", function(event) {
//   event.target.classList.add("hover");
// })