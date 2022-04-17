function fibonacciGenerator(n) {
  let ans = [0,1];
  
  if(n === 1) {
    return '0';
  }
  else if (n === 2) {
    return ans;
  }
  else {
    for(let i = 2, startNum = 0, endNum = 1; i < n; i++) {
      let sum = startNum + endNum;
      ans.push(sum);
      startNum = endNum;
      endNum = sum;
    }  
  }
  return ans;
}


let numberOfItems = 10;



console.log(fibonacciGenerator(numberOfItems));
