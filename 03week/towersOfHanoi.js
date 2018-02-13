'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};


const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  // Your code here
  // Enabling pieces to be moved to other stacks
  return stacks[endStack].push(stacks[startStack].pop());
}

const isLegal = (startStack, endStack) => {
// Your code here
// Using the isValid function to determine if moving the pieces are legal or not
if (isValid(startStack, endStack)) {

  let beginTest = stacks[startStack][stacks[startStack].length -1];
  let finishTest = stacks[endStack][stacks[endStack].length -1];

  // If beginTest is less than finishTest OR if the endStack equals to 0
  // Return true; else return false, because invalid move
  if((beginTest < finishTest) || stacks[endStack].length === 0) {
    return true;
  } else {
    console.log('Cant do that bruh.')
    return false;
  }
  // when player inputs a selection other than 'a','b', or 'c'
  } else {
    console.log('Word? Only got a, b, and c options. Come on, try again.')
    return false;
  }
};


const isValid = (startStack, endStack) => {
  // Your code here
  // Validate to see if player moves the piece to the appropriate stack

  //if startStack equals 'a' AND goes to endStack 'b' OR 'c'; return as true
  if ((startStack === 'a') && (endStack === 'b' || endStack === 'c')) {
    return true;
    //if startStack equals 'b' AND goes to endStack 'a' OR 'c'; return as true
  } else if ((startStack === 'b') && (endStack === 'a' || endStack === 'c')) {
    return true;
    //if startStack equals 'c' AND goes to endStack 'a' OR 'b'; return as true
  } else if ((startStack === 'c') && (endStack ==='a' || endStack === 'b')) {
    return true;
    //if any other input is added that are not 'a', 'b', or 'c'; return as false
  } else {
    return false;
  }
};

const checkForWin = () => {
  // Your code here

  // Checking for win when all pieces are on stack 'b' or stack 'c' in order
  if(stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('You win! Congrats!')
    return true;
  } else {
    return false;
  }
};

const towersOfHanoi = (startStack, endStack) => {
  // Your code here

  // Checking to see if movePiece function is working within the isLegal function
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
    // Reset, when game is won
  } if (checkForWin()) {
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    }
  }
};

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();

// Test here
