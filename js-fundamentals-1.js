"use strict";

/*
// 08/08/22
// Values & Variables - NOTES
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("David");
console.log(23);

let firstName = "David";

console.log(firstName);

console.log(js);

// Values & Variables - ASSIGNMENT

// 1. Declare variables called 'country', 'continent', and 'population' and assign their values according to your own country (population in millions).
let country = "United States of America";
let continent = "North America";
let population = 579000000;

// 2. Log their values to the console.
console.log(country);
console.log(continent);
console.log(population);
*/

/*
// 08/10/22
// Data Types - NOTES
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(typeof year);

console.log(typeof null);

// Let, Const, & Var - NOTES
let age = 30;
console.log(age);
age = 31;
console.log(age);

const birthYear = 1993;
// birthYear = 1994; Can't reassign value of a 'const' variable.
// const job; 'const' variable needs an initial value.

var job = "programmer";
console.log(job);
job = "student";
console.log(job);


// Basic Operators
// Math operators
const now = 2022;
const ageDavid = now - 1993;
console.log(ageDavid);
const ageKelly = now - 1995;
console.log(ageKelly);

console.log(ageDavid * 2);
console.log(ageDavid / 2);
console.log(2 ** 3);

const firstName = "David";
const lastName = "Prieto";
console.log(firstName + " " + lastName); // Concatenating

// Assignment operators
let x = 10 + 5;
x += 10; // 25
x *= 4; // 100
x++; // 101
x--; // 100
console.log(x);


// Comparison operators ( >, <, >=, <= )
console.log(ageDavid > ageKelly);
console.log(ageKelly >= 18);

const isFullAge = ageKelly >= 18;

console.log(isFullAge);

console.log(now - 1993 > now - 1995);

console.log(25 - 10 - 5);

let y, z;
y = z = 25 -10 -5;
console.log(y, z);

const averageAge = (ageDavid + ageKelly) / 2;
console.log(averageAge);
*/

////////// Coding Challenge #1 //////////

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2. Which equals --> mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
 */

/*
// Data 1:
let markWeight1 = 78;
let markHeight1 = 1.69;
let markBMI1 = markWeight1 / (markHeight1 ** 2);
console.log(markBMI1);

let johnWeight1 = 92;
let johnHeight1 = 1.95;
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);
console.log(johnBMI1);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);

// Data 2:
let markWeight2 = 95;
let markHeight2 = 1.88;
let markBMI2 = markWeight2 / (markHeight2 ** 2);
console.log(markBMI2);

let johnWeight2 = 85;
let johnHeight2 = 1.76;
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);
console.log(johnBMI2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);
 */

// 08/12/22
// Template Strings
const firstName = "David";
const job = "Programmer";
const birthYear = 1993;
const year = 2022;

const david = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(david);

// ES6 Template Strings
const davidNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(davidNew);

// Remember you  can use back ticks to write strings
console.log(`String written with back ticks...`);

// Can use "\n" to start a string on a new line
console.log("String with \n" +
"multiple \n" +
"lines");

// Can just use back ticks and enter without the "\n" to write a string on a new line
console.log(`String with
multiple
lines`);

// If / Else Statements
const age = 15;
const yearsLeft = 18 - age;

if(age >= 18) {
    console.log(`You are old enough and can obtain your driver's license 🚘`);
} else {
    console.log(`You are too young to obtain your driver's license. Wait another ${yearsLeft} years...`);
}

const birthYearAgain = 2001;
let century;

if(birthYearAgain <= 2000) {
    century = 20 + "th";
} else {
    century = 21 + "st";
}
console.log(century);

////////// Coding Challenge #2 //////////

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2. Which equals --> mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console,saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
 */

// Data 1:
let markWeight1 = 78;
let markHeight1 = 1.69;
let markBMI1 = markWeight1 / (markHeight1 ** 2);
console.log(markBMI1);

let johnWeight1 = 92;
let johnHeight1 = 1.95;
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);
console.log(johnBMI1);

if(markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is highers than John's (${johnBMI1})!`);
} else {
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
}

// Data 2:
let markWeight2 = 95;
let markHeight2 = 1.88;
let markBMI2 = markWeight2 / (markHeight2 ** 2);
console.log(markBMI2);

let johnWeight2 = 85;
let johnHeight2 = 1.76;
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);
console.log(johnBMI2);

if(markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is highers than John's (${johnBMI2})!`);
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}