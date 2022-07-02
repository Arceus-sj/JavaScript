// filter(): loops and return an array with matching conditions

// const filter = (numbers, greaterThen) => {
//   let ans = [];
//   for (const number of numbers) {
//     if(number > greaterThen) {
//       ans.push(number);
//     }
//   }

//   return ans;
// };

// const array = new Array(1,2,3,4,5,6);

// console.log(filter(array, 4));
// // or
// console.log(array.filter(num => num > 3));
 
const actors = [
  { name: "Robert Downey Jr.", netWorth: 320000000 },
  { name: "Will Smith", netWorth: 360000000 },
  { name: "Arnold", netWorth: 430000000 },
  { name: "Tom Cruise", netWorth: 600000000 },
  { name: "Dwayne Jhonson", netWorth: 800000000 },
  { name: "Jerry Seinfeld", netWorth: 1000000000 }
];


const filter = (actors, actorWorthGreaterThen) => {
  let actorLeft = [];

  for(const actor of actors) {
    if(actor.netWorth > actorWorthGreaterThen) {
      actorLeft.push(actor.name);
    }
  } 
  return actorLeft;
};

console.log(filter(actors, 400000000));
