
let numberOfBottles = 99;

console.log(numberOfBottles);

while(numberOfBottles >= 0) {
  
  if (numberOfBottles === 1) {
    console.log(`${numberOfBottles} bottle of beer on the wall, ${numberOfBottles} of beer.`);
    console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
  }
  else if(numberOfBottles === 0) {
    console.log(`No more bottles of beer on the wall, no more bottles of beer. `);
    console.log(`Go to store and buy some more, 99 bottles of beer on the wall.`);
  }
  else {
    console.log(`${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} of beer.`);
    console.log(`Take one down and pass it around, ${numberOfBottles - 1} bottles of beer on the wall.`);  
  }

  
  numberOfBottles--;
  
}
