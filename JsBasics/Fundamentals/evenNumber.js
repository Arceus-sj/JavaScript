let number = [];

for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        number.push(i);
    }
    else {
        continue;
    }
}

console.log(number);
