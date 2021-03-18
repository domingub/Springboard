/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const htmlBoard = document.querySelector("#board");
const width = 7;
const height = 6;
let currPlayer = 1; // active player: 1 or 2
let gameOver = false;
let board = []; // array of rows, each row is array of cells  (board[y][x])


function makeBoard() {
  // set "board" to empty height x width matrix array
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++){
      row[j] = null;
    }
    board.push(row);
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // create the top row of the board, which is the clickable area for players to drop a piece.
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);
//create the cells for the top row
  for (let x = 0; x < width; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
//append the top row to the table
  htmlBoard.append(top);

  //make the cells of the board
  for (let y = 0; y < height; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < width; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);  
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}


function findSpotForCol(x) {
  for (let y = height - 1; y >= 0; y--){
    if(board[y][x] === null) {
      return y;
    }    
  }
  return null;
}

function placeInTable(y, x) {
  // make a div and insert into correct table cell
  const piece = document.createElement('div');
  piece.classList.add("piece");  
  piece.style.backgroundColor = (currPlayer === 1) ? "red" : "blue"; 
  document.getElementById(`${y}-${x}`).append(piece);
}

/** endGame: announce game end */

function endGame(msg) {
  //pop up alert message
  setTimeout(() => {alert(msg);}, 100); 
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  const x = +evt.target.id; 

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) return;

  // place piece in board and add to HTML table 
  placeInTable(y, x);

 //add line to update in-memory board
  board[y][x] = currPlayer;
 
  // check for win
  if (checkForWin()) {
    endGame(`Player ${currPlayer} won!`);
    gameOver = true;
  }

  // check for tie, if so, call endGame
  if (checkTie()) {
    return endGame(`Tie!`);
  }

  // switch players
  currPlayer = (currPlayer === 1)? 2: 1;
}

  function checkTie(){
    let topTr = board[0];
    return topTr.every(val => val !== null);
  }  

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < height &&
        x >= 0 &&
        x < width &&
        board[y][x] === currPlayer
    );
  }

  //for each cell, check if the ajancent four pieces are of the same color in four different direction: start from [y, x]: right, down, right down, left down. If on any direction,  there is a line found, the player wins, game over. 

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}


makeBoard();
makeHtmlBoard();
console.log('this works!')
