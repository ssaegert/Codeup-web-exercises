// ================================= ARRAY MANIPULATION
// BONUS 1:
// Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
// Using multiple functions will be helpful.
//     input = 5552324343, output = 555-232-4343
// input = 5553434, output = 555-3434
// input = 18005552323, output = 1-800-555-2323
//
// Extra Challenge: account for invalid characters
// Extra Challenge: if the input is already formatted, output the unformatted version
// Extra Challenge: allow the parser to accept letters and convert them to the correct numbers

var phoneNumber = prompt("What Is Your Phone Number");

var phoneNumberArray = phoneNumber.split("");
// if (parseInt(phoneNumberArray) == typeof('number')){
    if (phoneNumberArray.length === 7) {
        var firstThreeOfSeven = phoneNumberArray.slice(0, 3);
        var lastFourOfSeven = phoneNumberArray.slice(3);
        console.log(firstThreeOfSeven.join("") + "-" + lastFourOfSeven.join(""));
    } else if (phoneNumberArray.length === 10) {
        var firstThreeOfTen = phoneNumberArray.slice(0, 3);
        var secondThreeOfTen = phoneNumberArray.slice(3, 6);
        var lastFourOfTen = phoneNumberArray.slice(6);
        console.log(firstThreeOfTen.join("") + "-" + secondThreeOfTen.join("") + "-" + lastFourOfTen.join(""));
    } else if (phoneNumberArray.length === 11) {
        var firstOneOfEleven = phoneNumberArray.slice(0, 1);
        var firstThreeOfEleven = phoneNumberArray.slice(1, 4);
        var secondThreeOfEleven = phoneNumberArray.slice(4, 7);
        var lastFourOfEleven = phoneNumberArray.slice(7);
        console.log(firstOneOfEleven.join("") + "-" + firstThreeOfEleven.join("") + "-" + secondThreeOfEleven.join("") + "-" + lastFourOfEleven.join(""));
    }
// } else {
//     alert("Not a valid number!");
// }


// BONUS 2:
// Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//     1) Add a student name
// 2) Delete a student name
// 3) View all student names in alphabetical order
// 4) View all student names in reverse alphabetical order
// Store the student names in an array. Account for invalid user input.