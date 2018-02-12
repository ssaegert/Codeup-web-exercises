"use strict";
// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.
//
//     We know the rules of confect:

// if (stringFormula.includes("7") || stringFormula.includes("8")) {
//
//
// }
//
//
//
// function isValid(formula){
//     var stringFormula = formula.join("").toString();
//     if (stringFormula.includes("1") && stringFormula.includes("2")) {
//         return false;
//     } else if (stringFormula.includes("3") && stringFormula.includes("4")){
//         return false;
//     } else if (stringFormula.includes("5") && (stringFormula.indexOf("6") === -1)){
//         return false;
//     } else if (stringFormula.includes("6") && (stringFormula.indexOf("5") === -1)){
//         return false;
//     } else {
//         return true;
//     }
// }
// isValid([1,3,7]);

// function isValid(formula) {
//     var stringFormula = formula.join("").toString();
//     if (stringFormula.includes("7") || stringFormula.includes("8")) {
//         if (stringFormula.includes("1") && stringFormula.includes("2")) {
//             return false;
//         } else if (stringFormula.includes("3") && stringFormula.includes("4")) {
//             return false;
//
//         } else if (stringFormula.includes("5") && (stringFormula.indexOf("6") === -1)) {
//             return false;
//
//         } else if (stringFormula.includes("6") && (stringFormula.indexOf("5") === -1)) {
//             return false;
//
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }
// isValid([1,3,7]);

//------------

// I have a cat and a dog.
//
//     I got them at the same time as kitten/puppy. That was humanYears years ago.
//
//     Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
//     humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// var humanYearsCatYearsDogYears = function(humanYears) {
//     var human = humanYears;
//     var buildArray = [];
//     buildArray.push(human);
//     var cat;
//     if (human === 1) {
//         cat = 15;
//         dog = 15;
//     } else if (human === 2) {
//         cat = 24;
//     } else if (human > 2) {
//         cat = (human - 2) * 4 + 24;
//     }
//     buildArray.push(cat);
//     var dog;
//     if (human === 1) {
//         dog = 15
//     } else if (human === 2) {
//         dog = 24
//     } else if (human > 2) {
//         dog = (human - 2) * 5 + 24
//     }
//     buildArray.push(dog);
//     return buildArray;
// }

//------------

// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
//
//     Find the errors in the code to get the celsius converter working properly.
//
//     To convert fahrenheit to celsius:
//
//     celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

// function weatherInfo (temp) {
//     var c = convertToCelsius(temp);
//     if (c < 0)
//         return c + " is freezing temperature";
//     else
//         return (c + " is above freezing temperature")
// }
//
// function convertToCelsius(temperature) {
//     var celsius = (temperature - 32) * (5/9);
//     return celsius
// }

//---------------

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
//
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//
//     If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//
//     Return the total figure the individual will receive as a string prefixed with '£' (JS and Java) or '$' (C#, C++, Ruby, Clojure, Elixir, PHP and Python).


// function bonusTime(salary, bonus) {
//     if (bonus === true) {
//         return '£' + (salary * 10).toString();
//     } else if (bonus === false) {
//         return '£' + salary.toString();
//     }
// }

//---------------


// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
//
//     Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is equal or less than two, it will return the name as is.
// describe("Basic tests",_=>{
//     Test.assertSimilar(whoIsPaying("Mexico"),["Mexico", "Me"]);
// Test.assertSimilar(whoIsPaying("Melania"),["Melania", "Me"]);
// Test.assertSimilar(whoIsPaying("Melissa"),["Melissa", "Me"]);
// Test.assertSimilar(whoIsPaying("Me"),["Me"]);
// Test.assertSimilar(whoIsPaying(""), [""]);
// Test.assertSimilar(whoIsPaying("I"), ["I"]);
// });


// function whoIsPaying(name){
//     var nameArray = (name.toString()).split("");
//     return (nameArray[0] + nameArray[1]).toString
// }
//
//
// function whoIsPaying(name){
//     var nameArray = (name.toString()).split("");
//     // if (nameArray.length > 2)
//     return (nameArray[0] + nameArray[1]).toString
// }



//---------------


//
// function century(year) {
//     var yearArray = (year.toString()).split("");
//     if (yearArray.length = 4) {
//         if (parseInt(yearArray[2] + yearArray[3]) > 0) {
//             return (parseInt(yearArray[0] + yearArray[1])) + 1
//         } else {
//             return parseInt(yearArray[0] + yearArray[1])
//         }
//     } else if (yearArray.length = 3) {
//         if (parseInt(yearArray[1] + yearArray[2]) > 0) {
//             return (parseInt(yearArray[0])) + 1
//         } else {
//             return parseInt(yearArray[0])
//         }
//     } else if (yearArray.length = 2) {
//         return 1
//     }
// }

//---------------
//
// Create a function that returns the name of the winner in a fight between two fighters.
//
//     Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
//
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
//
//     Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
//
// ##Example:
// declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") => "Lew"
//
// // Python
// declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
//
// Lew attacks Harry; Harry now has 3 health.
//     Harry attacks Lew; Lew now has 6 health.
//     Lew attacks Harry; Harry now has 1 health.
//     Harry attacks Lew; Lew now has 2 health.
//     Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }

// ##Example Tests:
// Test.describe("Example Test Cases", function(){
//
//     Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
//
//     Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
//
//     Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
//
//     Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
//
//     Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
//
//     Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")
//
// });

function declareWinner(fighter1, fighter2, firstAttacker) {
    return "Write your code here";
}