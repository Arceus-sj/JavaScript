tripper(5);

function tripper(a) {
	
	// parseInt() convert any variable into integer 
	let bill = parseInt(a);
	console.log(bill+5);
}




/*
Now bigTripper act as variable function not a pure function,
so we can not call a function before declaration
*/ 
let bigTripper = function (a) {
	let bill = parseInt(a);
	console.log(bill+100);
};

console.log(bigTripper("200"));



console.log(name);

var name = "Mr. Cypher";


function printName() {
	var name = "Mr. Jana";
	console.log(name);
}

printName();

console.log(name);
