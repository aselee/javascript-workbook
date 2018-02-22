'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// mark board with indexes
// check to see if I won
// IF i don’t win, switch players
// IF you win, game’s over, reset board
// reset players

const playerOne = 'X';
const playerTwo = 'O';

const horizontalWin = () => {
  // Your code here

  // Making a condition where if a player makes a horizontal win across the
  // board will equals a true (win game)
  // if not it will equals false(lose game)

  if(board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] ===
  playerTurn) {
    return true;
  } else if (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2]
  === playerTurn) {
    return true;
  } else if (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2]
  === playerTurn) {
    return true;
  } else {
    return false;
  }
}

const verticalWin = () => {
  // Your code here

  // Making another condition for any vertical win on the board will equals a win

  if(board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] ===
  playerTurn) {
    return true;
  } else if(board[0][1] === playerTurn && board[1][1] === playerTurn && board[1][2]
  === playerTurn) {
    return true;
  } else if(board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2]
  === playerTurn) {
    return true;
  } else {
    // if it does not meet any of those statements, it will return false
    return false;
  }
}

const diagonalWin = () => {
  // Your code here

  // Creating another condition for any diagonal wins will count as a win
  // there are only two conditions for diagonal wins
  if(board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] ===
  playerTurn) {
    return true;
  } else if(board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0]
  === playerTurn) {
    return true;
  } else {
    return false;
  }
}

const checkForWin = () => {
  // Your code here
  // Checking for win if functions horizontalWin, verticalWin and diagonalWin
  // conditions are met, it will return as a win

  if(horizontalWin()) {
    return true;
  } else if(verticalWin()) {
    return true;
  } else if(diagonalWin()) {
    return true;
  } else {
    return false;
  }
}

const ticTacToe = (row, column) => {
  // Your code here
  if(horizontalWin()) {
    return true;
  } else if(verticalWin()) {
    return true;
  } else if(diagonalWin()) {
    return true;
  }

}
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
