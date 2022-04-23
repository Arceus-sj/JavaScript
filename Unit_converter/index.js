function unitConverter() {
    let number = document.querySelector('#number').value;

    let meterToFeet = number * 3.28084;
    let feetToMeter = number * 0.3048;
    let ans1 =  `${number} meters = ${meterToFeet.toFixed(3)} feet | ${number} feet = ${feetToMeter.toFixed(3)} meters`;
    document.querySelector('#res1').innerHTML = ans1;

    //volum convertion(Liters/Gallons)
    let literToGallon = number * 0.264172;
    let GallonToLiter = number * 3.78541;
    let ans2 = `${number} liters = ${literToGallon.toFixed(3)} gallons | ${number} gallons = ${GallonToLiter.toFixed(3)} liters`;
    document.querySelector('#res2').innerHTML = ans2;
    
    //Mass convertion(Kilograms/Pounds)
    let kilosToPounds = number * 2.20462;
    let poundsToKilos = number * 0.453592;
    let ans3 = `${number} kilos = ${kilosToPounds.toFixed(3)} pounds | ${number} pounds = ${poundsToKilos.toFixed(3)} kilos`;
    document.querySelector('#res3').innerHTML = ans3;
}