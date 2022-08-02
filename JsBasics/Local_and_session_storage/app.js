// add a key value pair inside local storage
localStorage.setItem("Name", "Kunal");
localStorage.setItem("Name2", "Jay");

// retrieving an item from local storage
let name1 = localStorage.getItem("Name");
console.log(name1);


// deleting the entire local storage
// localStorage.clear();

// delete a particular element from local storage
localStorage.removeItem("Name");

localStorage.setItem("Name3", "Nancy");

// adding array to the local storage
let arr = [1,2,3,4,5];

localStorage.setItem("Numbers", JSON.stringify(arr));

let numbers = JSON.parse(localStorage.getItem("Numbers"));

console.log(numbers);
