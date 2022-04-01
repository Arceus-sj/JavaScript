function isLeap(year) {
    
/**************Don't change the code above****************/    

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  return "Leap year.";
}
else {
  return "Not leap year";
}

    

/**************Don't change the code below****************/    

}

console.log(isLeap(2400));
console.log(isLeap(1989));
console.log(isLeap(2000));
console.log(isLeap(2100));
