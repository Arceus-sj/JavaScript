// reduce: it return value like it add first 2 elements of an array and after that the result is added to next element until array ends.
 
let arr = [1,2,3,4,5,6,1,2];

let a = arr.reduce((value1, value2) => {
  return value1 + value2;
})

console.log(a);
