'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/*function rockPaperScissors(hand1, hand2) {
}*/

// 2.17.18 Getting undefined for game results

  // Write code here
  const rockPaperScissors = (h1, h2) => {
    if (h1 === h2) {
     return "Its a tie!"

   } else if (h1 === 'Rock') {
      if (h2 === 'Paper') {
        console.log("Paper Wins!" + " " + "You beat me! Nice one!")
        return true;
      } else {
        console.log("Rock Wins!" + " " + "HAH! I win, you lose.")
        return false;
      }

    } else if (h1 ==='Paper') {
      if (h2 === 'Rock') {
        console.log("Paper wIns!" + " " + "You got me! Good job!")
        return true;
      } else {
        console.log("Scissors wIns!" + " " + "Wow, how?!")
        return false;
      }

    } else if (h1 === 'Scissors') {
      if (h2 === 'Rock') {
        console.log("Rock wiNs!" + " " + "I finally beat you!")
        return true;
      } else {
        console.log("Scissors wiNs" + " " + "You win again?! How?!")
        return false;
      }
    }
  }

  rockPaperScissors();

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
