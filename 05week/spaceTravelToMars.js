'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Notes
// Create Class CrewMember and make (name, job, specialSkill, ship)
// Rick Martinez is the new CrewMember with (name, job, specialSkill)
// Another Class to describe the ship and with it adding a new class, 'ability'
// mission statement for method added in Ship
// If a specific CrewMember does not go to the specific ship, the mission will Fail


// Your code here

// Create class for CrewMember with a name, job, specialSkill, and ship
class CrewMember {
  constructor(name, job, specialSkill, ship) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  // create a method for CrewMember to enter ship using the push method
  enterShip = (ships) => {
    //console.log(this.name)
    ships.crew.push(this)
  }
}
// add a newMember, Commander Lewis
const newMember = new CrewMember ('Commander Lewis')
console.log(newMember)

// Creating a class for Ship with a name, type, ability, and crew
class Ship {
  constructor(name, type, ability, crew){
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }

  // Need to state that in order for the missionStatement to pass, the CrewMember
  // will have to match the ship type
  // Create a method called missionStatement, if the crewMember enters the correct
  // ship, missionStatement will return true

  missionStatement = () => {
    if(this.crew) {
      return true
      console.log('Mission Successful. Mission Accomplished.')
    } else {
      return false
      console.log('Cant perform a mission yet.')
    }
  }
}

//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
