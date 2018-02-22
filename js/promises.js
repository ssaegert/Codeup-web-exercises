"use strict";


// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// Generate a Personal Access Token for the github api.
//
//     We will use this so that we don't get rate limited when talking to the github api. You can add the token to your requests like this:
//
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

// let wait = n =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (n > 0) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, n);
//     });
//
// wait(1000)
//     .then(() => console.log('You\'ll see this after 1 second'))
//     .catch(error => console.log(error));
//
// wait(3000)
//     .then(() => console.log('You\'ll see this after 3 seconds'))
//     .catch(error => console.log(error));


function wait(number) {
    return new Promise((resolve) => {
        setTimeout(resolve, number);
    });
}


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



fetch('https://api.github.com/users/ssaegert/repos?per_page=100', {headers: {'Authorization': '3d38a0e3053ecbf26ce0dbfa8f529e1becf38f6f'}})
    .then(response => response.json())
    .then(repositories => {
        repositories.map(repo => {
            dates.push(repo.updated_at);
        });
        dates.sort();
        document.querySelector('span').innerText = new Date(dates[dates.length - 1]);
    });
