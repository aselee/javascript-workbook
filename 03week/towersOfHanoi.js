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


function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here

}

function isLegal() {
  // Your code here

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here

}

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

// First Test: run towersOfHanoi, when player moves stack 'a' to stack 'c' it will look like
// let stacks = {
//   a: [4, 3, 2],
//   b: [],
//   c: [1]
// }

// Second Test: player move stack 'a' to stack 'b'
//   let stacks = {
//     a: [4, 3],
//     b: [2],
//     c: [1]
//   }
//
// Third Test: player move stack 'c' to stack 'b'
// let stacks = {
//   a: [4, 3],
//   b: [2, 1],
//   c: []
// }
// Fourth Test: player move stack 'a' to stack 'c'
// let stacks = {
//   a: [4],
//   b: [2, 1],
//   c: [3]
// }

// Fifth Test: player move stack 'b' to stack 'c'
// let stacks = {
//   a: [4],
//   b: [2],
//   c: [3, 1]
// }

// Sixth test: player move stack 'b' to stack 'a'
// let stacks = {
//   a: [4, 2],
//   b: [],
//   c: [3, 1]
// }

// Seventh test: move stack 'a' to stack 'b'
// let stacks = {
//   a: [4],
//   b: [2],
//   c: [3, 1]
