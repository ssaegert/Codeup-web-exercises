"use strict";
// Each time you define a new function, be sure to run it with some test inputs.
//     Make a function named sayHello(name) that returns "Hi " + name.
function sayHello(name){
    return "Hi" + " " + name;
}
var message = sayHello("Scott");
console.log(message);


//     Write a function named capitalize(string)
// that takes a string of any capitalization and
// uppercases the first character and lowercases
// the rest of the characters of a string.
function capitalize(string) {
    var lowerCaseString = string.toLowerCase();
    var upperCaseFirstLetter = lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
    return upperCaseFirstLetter
}
var toChange = "sCott";
var changeCase = capitalize(toChange);
console.log(changeCase)


//     Write a function named upperCase(string)
function upperCase(string){
return string.toUpperCase();
}
var allUpperCase = upperCase("loud")
console.log(allUpperCase);


// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return "I am JavaScript";
}
var noIamNot = identity("Just Kidding");
console.log(noIamNot);

//     Make a function named isOdd(number)
function isOdd(number) {
    oddCheck = number % 2;
    return oddCheck > 0;
}
var isThisOdd = 3;
console.log("It is " + isOdd(isThisOdd) + " that " + isThisOdd + " is an odd number.");


// Make a function named isEven(number)
function isEven(number){
    evenCheck = number % 2;
    return evenCheck <= 0;
}
var isThisEven = 3;
console.log("It is " + isEven(isThisEven) + " that " + isThisEven + " is an even number.");


// Make a function named isPositive(number)
function isPositive(number){
    return number > 0;
}
var isThisPostive = 3
console.log("It is " + isPositive(isThisPostive) + " that " + isThisPostive + " is a positive number.");


// Make a function named isNegative(number)
function isNegative(number) {
    return number < 0;
}
var  isThisNegative = 3;
console.log("It is " + isNegative(isThisNegative) + " that " + isThisNegative + " is a negative number.");


// Make a function named isBoolean(input)
function isBoolean(input){
    var whatType = typeof input;
    return whatType === "boolean";
}
var whatTypeIsThis = 42;
console.log("It is " + isBoolean(whatTypeIsThis) + " that " + whatTypeIsThis + " is a boolean.")


// Make a function named isTrue(boolean)
// Make a function named isFalse(boolean)
// Make a function named isTruthy(input)
// Make a function named isFalsy(input)
// Make a function named isVowel(letter)
// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels
// Make a function named isConsonant(letter)
// Make a function named hasConsonants(string)
// Make a function named isCapital(letter)
// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
//     Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named hasSpaces(string) that returns if a string has any space characters
// Make a function named isZero(number)
// Make a function named increment(number) that returns a number plus one
// Make a function named decrement(number) that returns a number minus one
// Make a function named isFive(input)
// Make a function named addFive(input) that adds five to some input.
//     Make a function named isMultipleOfFive(input)
// Make a function named isThree(input)
// Make a function named isMultipleOfThree(input)
// Make a function named isMultipleOfThreeAndFive(input)
// Write a function named lowerCase(string)
// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
//     Write a function named add(a, b) that returns the sum of a and b
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named isNumeric(input) returns true/false if the input is a number or numeric string
// Make a function named trim(string) that removes empty spaces before and after the input.