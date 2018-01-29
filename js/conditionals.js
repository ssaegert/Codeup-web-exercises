"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var number = confirm("would you like to enter a number?");
var myNumber = prompt("Enter your number");
function isNumber(myNumber) {
    return !isNaN(myNumber);
}

if(isNumber(myNumber)) {
    if (myNumber === 0) {
        alert("This is an even number");
        alert("your number plus 100 is " + (parseFloat(myNumber) + 100));
    } else {
        alert("This is an odd number");
        alert("your number plus 100 is " + (parseFloat(myNumber) + 100));
    }
    if (myNumber > 0) {
        alert(myNumber + " is a positive number.");
    } else {
        alert(myNumber + " is a negative number.");
    }
} else {
    alert("This is not a number!")
}



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

var myRandomColor = randomColor;
console.log("My random color is " + myRandomColor);
if (myRandomColor === 'red') {
    alert("Red like lava")
} else if (randomColor === 'orange') {
    alert("Orange like the fruit")
} else if (randomColor === 'yellow') {
    alert("Yellow like the sun")
} else if (randomColor === 'green') {
    alert("Green like the grass")
} else if (randomColor === 'blue') {
    alert("Blue like the ocean")
} else if (randomColor === 'indigo') {
    alert("Indigo like the band")
} else if (randomColor === 'violet') {
    alert("Violet like the something violet")
}




var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

var myRandomColor = randomColor;
console.log("My random color is " + myRandomColor);
switch (myRandomColor) {
    case 'red':
        alert("Red like lava");
        break;
    case 'orange':
        alert("Orange like the fruit");
        break;
    case 'yellow':
        alert("Yellow like the sun");
        break;
    case 'green':
        alert("Green like the grass");
        break;
    case 'blue':
        alert("Blue like the ocean");
        break;
    case 'indigo':
        alert("Indigo like the band");
        break;
    case 'violet':
        alert("Violet like the something violet");
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


var userColor = prompt("What is your favorite color?");
switch (userColor) {
    case 'red':
        alert("Red like lava");
        break;
    case 'orange':
        alert("Orange like the fruit");
        break;
    case 'yellow':
        alert("Yellow like the sun");
        break;
    case 'green':
        alert("Green like the grass");
        break;
    case 'blue':
        alert("Blue like the ocean");
        break;
    case 'indigo':
        alert("Indigo like the band");
        break;
    case 'violet':
        alert("Violet like the something violet");
}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var bill = prompt("Bill in dollars and cents. exp: 21.52");
var luckyNumber = prompt("What is your lucky number");
var discount;
console.log(total);
if (luckyNumber === "1") {
    discount = bill * 0.10;
} else if (luckyNumber === "2") {
discount = bill * 0.25;
} else if (luckyNumber === "3") {
    discount = bill * 0.35;
} else if (luckyNumber === "4") {
    discount = bill * 0.5;
} else if (luckyNumber === "5") {
    discount = bill - bill;
}
function calculateTotal(bill, discount) {
    var total = bill - discount;
    return total;
}
var total = calculateTotal(bill, discount);

alert("Your total is $" + total.toFixed(2));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var bill = prompt("Bill in dollars and cents. exp: 21.52");
var discount;
var myLuckyNumber = luckyNumber;
console.log(myLuckyNumber);
if (myLuckyNumber === 1) {
    discount = bill * 0.10;
} else if (myLuckyNumber === 2) {
    discount = bill * 0.25;
} else if (myLuckyNumber === 3) {
    discount = bill * 0.35;
} else if (myLuckyNumber === 4) {
    discount = bill * 0.5;
} else if (myLuckyNumber === 5) {
    discount = bill - bill;
}
function calculateTotal(bill, discount) {
    var total = bill - discount;
    return total;
}
var total = calculateTotal(bill, discount);
console.log(total);
alert("Your total is $" + total.toFixed(2));