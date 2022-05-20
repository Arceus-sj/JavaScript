const btn = document.querySelector('button');



btn.addEventListener('click', function () {
    let r = document.querySelector('textarea').value;
    let ans = document.querySelector('.ans');
    let calculation = Math.PI*r*r;
    
    ans.innerHTML = `Area of circle is ${calculation.toFixed(2)}`;
}); 
