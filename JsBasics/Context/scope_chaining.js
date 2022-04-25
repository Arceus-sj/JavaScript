var name = "Sam"; // global context

console.log("Line number 3 running...", name);

function sayName() {
    var name = "Jake"
    console.log("Line number 7 running...", name);

    sayNameTwo();
    function sayNameTwo() {
        console.log("Line number 11 running...", name);
    }
}

sayName();
  
