/*
falsy values are:
undefined
null
0
' '
NaN
*/


//Coercion example
let user = "2";

if (2 == user) { // if(2 === user)
    console.log("working...");
}
else {
    console.log("Falsy value...");
}

