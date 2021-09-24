let countEl = document.getElementById("count-el");
let count = 0;

console.log(countEl);

function increment() {
    console.log("Button is clicked..."); 
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    console.log(count);
}

save();
