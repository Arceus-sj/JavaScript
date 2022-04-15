
function whosPlaying(names) {
  let numberOfPeople = names.length;
  let randomPersonPosition = Math.floor(Math.random() * numberOfPeople); 
  let randomPersonName = names[randomPersonPosition];
  
  return `${randomPersonName} is going to buy lunch today!`;
}

let name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

console.log(whosPlaying(name));
