let num1 = 8;
let num2 = 2;
let result = document.getElementById("sum-el");


document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
    let sum = num1 + num2;
    result.textContent = "Result: " + sum;
    console.log(num1 + " + " + num2 + " = " + sum);
}

function subtract() {
    let sub = num1 - num2;
    result.textContent = "Result: " + sub;
    console.log(num1 + " - " + num2 + " = " + sub);
}

function multiply() {
    let mul = num1 * num2;
    result.textContent = "Result: " + mul;
    console.log(num1 + " * " + num2 + " = " + mul);
}

function divide() {
    let div = num1 / num2;
    result.textContent = "Result: " + div;
    console.log(num1 + " / " + num2 + " = " + div);
}

 