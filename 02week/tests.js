'use strict';

const assert = require('assert');
const readline = require('readline');

const rockPaperScissors = (handOne, handTwo) => {
  if(Number(handOne) && Number(handTwo)) {
    if(handOne > handTwo) {
      return "Hand one wins!"
    } else {
      return "Hand two wins!"
    }
  }
}


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
    it('should detect all possible scenaries which hand one wins', () => {
      assert.equal(rockPaperScissors('RocK', 'ScissorS'), "Hand one wins!");
      assert.equal(rockPaperScissors('ScissoRs', 'pApEr'), "Hand one wins!");
      assert.equal(rockPaperScissors('PaPer', 'RoCk'), "Hand one wins!");
    });
    it('should detect all possible scenaries which hand two wins'), () => {
      assert.equal(rockPaperScissors('papER', 'scissoRS'), "Hand two wins!");
      assert.equal(rockPaperScissors('roCK', 'papER'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissoRS', 'roCK'), "Hand two wins!");
    });
  });
} else {

  getPrompt();
