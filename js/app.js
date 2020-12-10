// ------------------------ OBJECT REVIEW

const person = {
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    age: 22,
    address: {
      street: '123 St.',
      city: 'San Francisco',
      state: 'CA',
      zip: 94931,
    },
    isLoggedIn: false,
    hobbies: ['Hiking', 'Biking', 'Walks on the beach'],
    pets: [
      {
        type: 'Dog',
        name: 'Doug',
        age: 2,
      },
      {
        type: 'Cat',
        name: 'Gumby',
        age: 4,
      },
      {
        type: 'Bird',
        name: 'Echo',
        age: 10,
        favFoods: {
            breakfast: 'Millet Seed',
            lunch: 'Orange',
        }
      },
    ],
  };

person.age = 23;

person.favColor = 'red';

  let result;

    result = person.pets[2].favFoods.breakfast;
  
    // console.log(result);

//  ---------------------------- THIS

//  'this' is a keyword. The value of this keyword is dependent on context

// One way to change the context of 'this' is to nest a method inside an object

// Global Context
console.log(this); // => window object

function attack (target) {
    target.health -= this.damage;
}

const playerProps = {
    health: 10,
    damage: 2,
    attack,
}

const player = Object.create(playerProps);

const enemy1 = {
    name: 'Enemy One',
    health: 10,
    damage: 1,
    attack: attack,
}
const enemy2 = {
    name: 'Enemy Two',
    health: 10,
    damage: 1,
    attack,
}

// player.attack(enemy1)
enemy2.attack(player);

console.log(player);

// The value of this can also be determinded by looking to the left of the method being called. This will equal whatever is on the left side
// const sayPlayerName = player.sayName();

// sayPlayerName;

//  This & Arrow Functions

// Bad Arrow Function
// const student = {
//   name: 'john Doe',
//   classes: [
//     'SEI',
//     'UX/UI',
//     'Data Science',
//   ],
//   sayName: () => {
//     console.log(this);
//   },
//   thisVal: this,
// }

// student.sayName();

// console.log(student.thisVal);



  const student = {
    name: 'john Doe',
    classes: [
      'SEI',
      'UX/UI',
      'Data Science',
    ],
    sayName() {
      console.log(this.name);
    },
    listClasses() {
      this.classes.forEach((item)  => {
        console.log(`${this.name} is a student of ${item}`);
      })
    }
  }

  student.sayName();
  student.listClasses();


  // Object Iteration

  const myRefrigerator = {
    milk: true,
    cheese: true,
    beef: false,
    chicken: true,
  }

  // const keys = Object.keys(myRefrigerator);
  // const values = Object.values(myRefrigerator);

  // console.log(keys);
  // console.log(values);


  // For In Loop
  for (let key in myRefrigerator) {
    console.log(`${key} is currently in stock: ${myRefrigerator[key]}`);
  }