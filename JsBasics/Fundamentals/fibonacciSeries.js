function fibonacciGenerator(n) {
  let ans = [0,1];
  for(let i = 0, startNum = 0, endNum = 1; i < n; i++) {
    let sum = startNum + endNum;
    ans.push(sum);
    startNum = endNum;
    endNum = sum;
  }
  
  return ans;
}


let numberOfItems = 10;



console.log(fibonacciGenerator(numberOfItems));
