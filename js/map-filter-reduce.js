"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// Use .map to create an array of strings where each element is a user's email address
// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

// let langFilter = users.filter(function({id, name, email, languages}) {
//     return languages.length > 2
// });
// console.log(langFilter);

let langFilter = users.filter((user) => {
    return user.languages.length > 2
});
console.log(langFilter);

//
// let allEmails = users.map(function({email}) {
//     return email;
// });
// console.log(allEmails);

let allEmails = users.map((user) => {
    return user.email;
});
console.log(allEmails);



const totalIds = users.reduce((total, person) => {
    return [total + person.name];
}, 0);

console.log(totalIds);


const userObject = users.reduce((accum, user) => {
    accum[user.id] = user;
    return accum
}, {});

console.log(userObject);

// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);
//
// console.log(sum);


// const salesPeople = [
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ];
//
// const totalSales = salesPeople.reduce((total, person) => {
//     return total + person.sales;
// }, 0);
//
// console.log(totalSales);


// let developers = [];
// users.forEach(function({id, name, email, languages}) {
//
//     if (languages.length > 2) {
//     developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
//
//     }
//
//
// });



// var language = users.filter(function({languages}) {
//     return [users.languages.length > 2];
// });

// var newArray = [];
//
// users.forEach(function(){
//     if (languages.length > 2){
//         newArray.push({id, name, email})
//     }
// });
// console.log(newArray);

// var lang = filterLang(function(){
//     if (users.languages.length > 2){
//         newArray.push({id, name, email, languages})
//     }
// });

// console.log(language);


// var returnEmails = users.map(function() {
//     return users.email;
// });
//
// console.log(returnEmails);


// BONUS--------------------------------

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects


// PROBLEM 1 - create an array of the first letters of each fruit

const findFirst = () => {
    let firstLetters = fruits.map((fruit) => {
        let allString = fruit.charAt(0);
        return allString;
    });
    let finalString = firstLetters.join("");
    return [finalString];
};

console.log(findFirst());



// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)

const nameAge = customers.map((user) => {
    return `${user.name}: ${user.age}`;
});
console.log(nameAge);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

// const civilServeants = customers.filter(user => {
//     let temp = [];
//     if (users.occupation = "Police Officer") {
//         temp.push(user);
//     }
//     return temp;
// });
// console.log(civilServeants);

// const civilServeants = customers.filter(user => {
//     return user.occupation.toString() === "Teacher" || user.occupation.toString() === "Police Officer"
// });
// console.log(civilServeants);

const civilServeants = customers.filter(({ occupation }) => {
    return occupation === "Teacher" || occupation === "Police Officer"
});
console.log(civilServeants);




// PROBLEM 4 - determine the average age of customers

const averageAge = customers.reduce((accum, user) => {
    return accum + user.age
}, 0) / customers.length;

console.log(averageAge);

//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()

//MORE BONUS--------------------

// Given the following array...
const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];
// complete the bonuses below...
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages


//EVEN MORE BONUS------------------


// # Map, Filter, Reduce exercise
//
// ## Source Data
// <a href="https://cdn.glitch.com/e6f06897-3ddf-49ac-a418-976be76cc6fc%2Fmock_data_batch_1.json">Mock Data Batch 1</a>
//
// <a href="https://cdn.glitch.com/e6f06897-3ddf-49ac-a418-976be76cc6fc%2Fmock_data_batch_2.json?1519228215291">Mock Data Batch 2</a>
//
// ## Exercises
// Make a page called functional_exercises.html
// Save both .json files into your project's ./data/ folder
//
// Use an ajax GET request to read the contents of both .json files.
//
// 1. Combine both arrays of objects into a single array. Name that variable users.
//
// 1. Use .reduce to get a sum total of every price from each object. Call that sum "totalPrices"
//
// 2. Use the users array and .reduce to determine how many shirts of each size we'll need to get. Example output should looks something like the following (numbers aren't exact)
//
// {
//     "S": 200,
//     "M": 892,
//     "L": 290,
//     "XL": 442
// }
//
// 2. Produce a new array of objects w/ only the car info. Call this array allCars. Each object should only have the make, model, color, price, used properties
//
// 3. Produce a single object called car_data w/ the following properties
// - `avg_price`, `avg_new_price`, `avg_used_price`, `top_make`, `top_model`, `total_number`, `number_used`, `number_new`, `highest_price`, `lowest_price`
//
// 4. Make an array called admins that contains only users who are admins
//
// 5. Make an array called authors that contains only users who are authors
//
//
// 1. Make an object called departments. That departments object should have a property for each department name. The value for each department name should be an array of user objects containing firstName, lastName, department, email, and buzzword
//
// {
//     "legal": [
//     {"first_name": "Jane", "email":"jane@jane.com", "buzzword":"activating motivators!"},
//     {"first_name": "Bob", "email":"bob@bob.com", "buzzword":"telegraphing bankers"}
// ],
//     "marketing": [
//     {"first_name": "Marsha", "email":"marsh@sha256.com", "buzzword":"securing wonder"},
//     {"first_name": "Pat", "email":"itspat@patrocks.com", "buzzword":"whatever works"}
// ],
//     etc ...
// }
