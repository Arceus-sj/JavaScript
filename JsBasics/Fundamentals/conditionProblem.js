/*
function find(n) {
	
	let result = 0;
	
	if(n > 10) {
		result = "Number is greater then 10";
	}
	else if(n === 10) {
		result = "Number is equal to 10";
	}
	else {
		result = "Number is less then 10";
	}
	
	return result;
}

console.log(find(1));
console.log(find(10));
console.log(find(20));
*/

function testSize(num) {
  // Only change code below this line
    let result = 0;
    if(num < 5) {
        result = "Tiny";
    }
    else if(num < 10) {
        result = "Small";
    }
    else if(num < 15) {
        result = "Medium";
    }
    else if(num < 20) {
        result = "Large";
    }
    else {
        result = "Huge";
    }

  return result;
  // Only change code above this line
}

console.log(testSize(7));
