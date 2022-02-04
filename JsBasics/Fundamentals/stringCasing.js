let name = prompt("What is your name? ");
let firstChar = name.slice(0,1);
let restOfChar = name.slice(1,name.length);
firstChar = firstChar.toUpperCase();
restOfChar = restOfChar.toLowerCase();
console.log(`Hello, ${firstChar+restOfChar}`);
alert(`Hello, ${firstChar+restOfChar}`);
