"use strict";

// For Loops Exercise 1
var x = parseInt(prompt("Give me a number!"));
function showMultiplicationTable(input){
    for (var i = 1; i <=10; i++) {
        console.log(input + " x " + i + " = " + input * i);
    }
}
showMultiplicationTable(x);

// For Loops Exercise 2
for (i = 1; i <= 10; i += 1) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 === 0) {
        var randomNumber = Math.floor(Math.random() * 180) + 20;
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}

// For Loops Exercise 3
// for (i = 1; i <= 9; i += 1 + i.toString()) {
//     console.log(i);
// }


// for (i = 1; i <= 9; i += 1) {
//     if (true) {
//         console.log(i * parseInt(1 + "1"))
//     }
// }


var number = n;

for (n = 1; n <= 111111111; n = parseInt(n + "1")) {
    for (i = 1; i <= 9; i += 1) {
        console.log(i * n)
    }
}



for (n = 1; n <= 111111111; n = parseInt(n + "1")) {
    if (n = 1; i <= 9; i += 1) {
        console.log(i * n)
    }
}


for (n = 1; n <= 111111111; n = parseInt(n + "1")) {
    console.log(i)
}


for (i = 1; i <= 9; i += 1) {
    for (n = 1; n <= 111111111; n = parseInt(n + "1")) {
        console.log(i)
    }
}