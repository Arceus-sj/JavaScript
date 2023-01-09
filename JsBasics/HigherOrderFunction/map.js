//  map() : loops and return an array

// const doubleArray = (number) => {
//   return number.map(number => number * 2);
// }

// doubleArray([1,2,3,4,5]).map(number => console.log(number));

// map: create a new array by performing some operation on each array element

let arr = [40,34,69];

let a = arr.map((value) => {
  return value + 1;
})

console.log(a);
