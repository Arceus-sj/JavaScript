let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-txt");
let count = 0;



function increment() {
    console.log("Button is clicked..."); 
    count += 1;
    // countEl.innerText = count;
    countEl.textContent = count;
    // console.log(count);
}



function save() {
    let countStr = count + " - ";
    // saveEl.innerText += countStr;
    // console.log(countStr)
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

 
