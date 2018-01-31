"use strict";

// While Loops Exercise 1
var i = 2;
while (i < 65536) {
    console.log(i);
    i += i;
}

// While Loops Exercise 2
// var allCones = Math.floor(Math.random() * 50) + 50;
// var needToSell = allCones
// do {
//     console.log("Still need to sell " + needToSell);
//     needToSell -= (Math.floor(Math.random() * 5) + 1);
// } while (needToSell >= 0);
//

if ((Math.floor(Math.random() * 5) + 1) <= needToSell) {
    do {
        console.log("Still need to sell " + needToSell);
        needToSell -= (Math.floor(Math.random() * 5) + 1);
    } while (needToSell >= 0);
}






// check needToSell
// if need to sell is greater than 0 sell more
// the if random number is greater than 0 and less than or equal to the need to sell
// amout then continue