function HouseKeeper(name, age, yearOfExp, workKnow) {
  this.name = name;
  this.age = age;
  this.yearOfExp = yearOfExp;
  this.workKnow = workKnow;
  
  // method
  this.clean = function () {
    alert("Cleaning ...");
  }
}

let houseKeeper1 = new HouseKeeper('sofia', 25, 5, ['Bathroom', 'Bedroom']);

// calling methods
console.log(houseKeeper1.clean());
