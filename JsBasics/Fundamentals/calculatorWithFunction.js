let num1 = 5;
let num2 = 10;
let num3 = 2;

function add(num1, num2) {
	return (num1 + num2);
}

function sub(num1, num2) {
	return (num2 - num1);
}

function mul(num1, num2) {
	return (num1 * num2);
}

function div(num1, num2) {
	return (num2 / num1);
}

function funky(num1, num2, num3) {
	return (num3 * num2) + num1;
}

console.log(add(num1, num2));
console.log(sub(num1, num2));
console.log(mul(num1, num2));
console.log(div(num1, num2));
console.log(funky(num1, num2, num3));
