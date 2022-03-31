function bmiCalculator (weight, height) {
    let myBMI = weight / (height * height);
    let res;
    
    if(myBMI < 18.5) {
        res = `Your BMI is ${myBMI}, so you are underweight.`;
    }
    else if(myBMI >= 18.5 && myBMI <= 24.9) {
        res = `Your BMI is ${myBMI}, so you have a normal weight.`;
    }
    else {
        res = `Your BMI is ${myBMI}, so you are overweight.`;
    }
    return res;
}

console.log(bmiCalculator(100, 2.1));
