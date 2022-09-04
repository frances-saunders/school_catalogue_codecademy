class School {
  constructor(name, level, numOfStudents) {
    this._name = name;
    this._level = level;
    this._numOfStudents = numOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numOfStudents() {
    return this._numOfStudents;
  }

  set numOfStudents(number) {
    if (typeof number === 'number') {
      this._numOfStudents = number;
    } else {
      console.log("You must enter in a numerical value!")
    }
  }

  quickFacts() {
  console.log(`${this.name} educates ${this.numOfStudents} students at the ${this.level} school level.`);
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
  const randInteger = Math.floor(Math.random() * substituteTeachers.length);
  return substituteTeachers[randInteger];
  }
}



class PrimarySchool extends School {
  constructor(name, numOfStudents, pickupPolicy) {
    super(name, 'primary', numOfStudents);
  this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numOfStudents, electives) {
    super (name, 'middle', numOfStudents);
    this._electives = electives;
  }

  get electives() {
    return this._electives;
  }
}

class HighSchool extends School {
  constructor(name, numOfStudents, sportsTeam) {
    super(name, 'high', numOfStudents);
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam() {
    return this._sportsTeam;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 16.');

const primarySubTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

console.log(`Here are the following schools your child is zoned for along with each school's highlights -- \n`)

lorraineHansbury.quickFacts(); 
console.log(`${lorraineHansbury.pickupPolicy}`)
console.log(`This school's substitute teacher for the Pre-K AM class will be ${primarySubTeacher} until further notice. \n`)

const abeLincoln = new MiddleSchool('Abraham Lincoln', 526, ['Orchestra ', ' Band', ' Chorus', ' Art', ' Woodworking', ' Home Ec', ' Computer 101']);

abeLincoln.quickFacts();
console.log(`This school offers the follwoing electives: ${abeLincoln.electives}. \n`)

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', ' Basketball', ' Volleyball', ' Track and Field']);

const highSubTeacher = School.pickSubstituteTeacher(['Christine Calimano', 'Jen Ponzie', 'Hillary Duffy', 'Catherine Consuela', 'Jack Sparrow', 'Keanu Reaves']);

alSmith.quickFacts();
console.log(`This school offers the following sports: ${alSmith.sportsTeam}. The physics teacher is currently on maternity leave until the second semester. The substitute is ${highSubTeacher}.`)
