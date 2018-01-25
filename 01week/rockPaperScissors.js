'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/*function rockPaperScissors(hand1, hand2) {
}*/

  // Write code here
const rockPaperScissors=(h1, h2)=>{
  if(h1 === h2) {
    return("It's a tie!");//if h1 equals to h2, it is a tie.

  }else if (h1 === "R"){ //if h1 equals to Rock.
    if(h2 === "P"); //and if h2 equals to Paper.
    return("Paper wins!"); //it will show that h2 wins.
  }else{              //h2 must equal to Scissors.
    return("Rock wins!"); //then h1 wins.

  }else if(h1 === "P"){ //if h1 equals to Paper.
    if(h2 === "R"); //and if h2 equals to Rock.
    return("Paper wins!") //it will show that h1 wins.
  }else{                  //h2 must equal to Scissors.
    return("Scissors wins!") //it will show that h2 wins.

  }else{              //"else if" is not needed, due to above conditions.
    if(h2 === "R"); //if h2 equals to Rock.
    return("Rock wins!") //it will show that Rock wins.
  }else{                //h2 must equal to Paper.
    return("Paper wins!") //then it will show that h2 wins.
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
