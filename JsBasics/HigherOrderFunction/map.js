//  map() : loops and return an array

const doubleArray = (number) => {
  return number.map(number => number * 2);
}

doubleArray([1,2,3,4,5]).map(number => console.log(number));
