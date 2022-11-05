"use strict";

/*
// 08/22/22
// Strict Mode:
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive.");

// const interface = "Audio";
// const private = 345;
 */

/*
// Functions:
function logger() {
    console.log(`My name is David.`);
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    return `Juice with ${apples} apples and ${oranges} oranges!`;
}

console.log(fruitProcessor(4, 5));
// OR:
const fruitJuice = fruitProcessor(4, 5);
console.log(fruitJuice);


// Function Declarations vs. Expressions:
// function declaration (CAN be called before they're defined/initialized):
calcAge1(); // function 'calcAge1' can be called before it is initialized because it is a function declaration.

function calcAge1(birthYear, currentYear) {
    return currentYear - birthYear;
}

console.log(calcAge1(1993, 2022));
// OR:
const age = calcAge1(1993, 2022);
console.log(age);

// function expression (a function saved in a variable; remember, expressions return values; CAN'T be called before they're defined/initialized):
calcAge2(); // function 'calcAge2' can't be called before it is initialized because it is a function expression.

const calcAge2 = function (birthYear, currentYear) {
    return currentYear - birthYear;
}

console.log(calcAge2(1993, 2022));
// OR:
const age2 = calcAge2(1993, 2022);
console.log(age2);
 */

// 10/05/22
// Arrow Functions:
/*
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1993, `David`));
console.log(yearsUntilRetirement(1983, `Kelly`));

// Functions calling other functions:

const cutFruitPieces = fruit => {return fruit * 4};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(fruitProcessor(2, 3));
 */

// Coding Challenge #1:
// See PDF for Challenge Details

// const calcAverage = (num1, num2, num3) => {return (num1 + num2 + num3) / 3}
//
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No winner");
//     }
// }
//
// // Test Data 1:
// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);
// checkWinner(avgDolphins1, avgKoalas1);
//
// // Test Data 2:
// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);
// checkWinner(avgDolphins2, avgKoalas2);

// 11/05/2022
// Arrays:

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
//
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends.length);
// console.log(friends.length - 1);
// console.log(friends[0]);
// console.log(friends[2]);
// friends[2] = 'Jay';
// console.log(friends);
//
// const years = new Array(4);
// years[0] = 1991;
// years[1] = 1984;
// years[2] = 2008;
// years[3] = 2020;
// console.log(years);
//
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);
//
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
//
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
//
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends.length);
//
// // Add elements - .push() & .unshift()
// console.log(friends.push('Jay')); // .push() adds the passed in data to the end of the array and returns length of the array.
//
// const newLength = friends.push('Jim'); // .push() return value saved in the variable 'newLength';
// console.log(newLength);
// console.log(friends);
//
// friends.unshift('John'); // .unshift() adds the passed in data to the beginning of the array.
// console.log(friends);
//
// // Remove elements - .pop() & shift()
// console.log(friends.pop()); // .pop() removes the last element of the array and returns the removed element.
// console.log(friends);
//
// const popped = friends.pop(); // .pop return value saved in the variable 'popped';
// console.log(popped);
//
// console.log(friends.shift()); // .shift() removes the first element of the array and returns the removed element.
// console.log(friends);
//
// const shifted = friends.shift(); // .shift() return value saved in the variable 'shifted'.
// console.log(shifted);
//
// console.log(friends.indexOf('Steven')); // .indexOf() returns the index of the passed in value. Returns -1 if the passed in value is not found.
//
// console.log(friends.includes('Michael')); // .includes() returns a boolean if the passed in value is found in the array or not.
// console.log(friends.includes('Peter'));
//
// if (friends.includes('Peter')) {
//     console.log('Peter found');
// }

