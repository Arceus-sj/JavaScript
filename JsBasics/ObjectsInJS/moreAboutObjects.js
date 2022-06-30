// const person = {
//   name: 'Cipher',
//   age: 20,
// }

// console.log(person);

// console.log(person.name);

// console.log(person['age']);

// person.id = 3536;

// console.log(person)

const introducer = (name, age) => {
  const person = {
    name: name,
    age: age,
    assets: 100000,
    liability: 50000,
    netWorth: function () {
      return this.assets - this.liability;
    }
  }

  return `Hi! I'm ${person.name} and I'm ${person.age} year old and my net worth is ${person.netWorth()} USD`;
}

console.log(introducer('Cipher', 20));
