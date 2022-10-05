"use strict";

/*
// 08/08/22
// Values & Variables:
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("David");
console.log(23);

let firstName = "David";

console.log(firstName);

console.log(js);

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
// Data Types:
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

// Let, Const, & Var:
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


// Basic Operators:
// Math operators:
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

// Assignment operators:
let x = 10 + 5;
x += 10; // 25
x *= 4; // 100
x++; // 101
x--; // 100
console.log(x);


// Comparison operators ( >, <, >=, <= ):
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

/*
// 08/12/22
// Template Strings:
const firstName = "David";
const job = "Programmer";
const birthYear = 1993;
const year = 2022;

const david = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(david);

// ES6 Template Strings:
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


// If / Else Statements:
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
 */

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
 */

/*
// Type Conversion & Coercion:
// Type Conversion:
const inputYear = `1993`; // input from a user is a string data type
console.log(Number(inputYear), (inputYear));
console.log(Number(inputYear) + 18);

console.log(Number(`David`)); // NaN
console.log(typeof NaN); // Number

console.log(String(23), (23));

// Type Coercion:
console.log(`I am ` + 23 + ` years old`); // Number converted to a string because of type coercion. "+" operator triggers JavaScript to convert a number to a string because the number is in between two strings.
console.log(`23` - `10` - `3`); // 10
console.log(`23` + `10` - `3`); // 2307
console.log(`23` / `2`); // 11.5
console.log(`23` * `2`); // 46
 */

/*
// Truthy & Falsy Values:
// 5 Falsy Values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // --> false
console.log(Boolean(undefined)); // --> false
console.log(Boolean(`David`)); // --> true
console.log(Boolean({})); // --> true
console.log(Boolean(``)); // --> false

const money = 100;
if(money) {
    console.log(`Don't spend it all.`);
} else {
    console.log(`You should get a job.`);
}

let height = 0;
if(height) {
    console.log(`Height is defined.`);
} else {
    console.log(`Height is NOT defined.`);
}
 */

/*
// Equality Operators --> '==' (loose comparison, performs type coercion) and '===' (strict comparison, does NOT perform type coercion):
const age = 18;

if(age === 18) console.log(`You're 18!`);

console.log(`18` == 18); // --> true

console.log(`18` === 18); // --> false

const userFavorite = Number(prompt(`What is your favorite number?`));
console.log(userFavorite);
console.log(typeof userFavorite); // --> string (user input is always a string data type)

if(userFavorite === 23) {
    console.log(`Michael Jordan all day.`)
} else if (userFavorite === 24) {
    console.log(`Black mamba, respect.`);
} else {
    console.log(`Not a cool number.`);
}

if(userFavorite !== 23) console.log(`Why not 23?`);
 */


/*
// 08/15/22
// Basic Boolean Logic (Logical Operators): The "&&", "||" and "!"
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Capable of driving!");
} else {
    console.log("Not capable of driving...");
}
 */

//////// Coding Challenge #3 //////////

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and at the same time has a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.
 */

/*
let dolphinsAverageScore1 = (96 + 108 + 89) / 3;
let koalasAverageScore1 = (88 + 91 + 110) / 3;
console.log(`Dolphins score: ${dolphinsAverageScore1}`, `Koalas score: ${koalasAverageScore1}`);

let dolphinsAverageScore2 = (97 + 112 + 101) / 3;
let koalasAverageScore2 = (109 + 95 + 123) / 3;
console.log(`Dolphins score: ${dolphinsAverageScore2}`, `Koalas score: ${koalasAverageScore2}`);

let dolphinsAverageScore3 = (97 + 112 + 101) / 3;
let koalasAverageScore3 = (109 + 95 + 106) / 3;
console.log(`Dolphins score: ${dolphinsAverageScore3}`, `Koalas score: ${koalasAverageScore3}`);

function result (dolphinsAverageScore, koalasAverageScore) {
    if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
        return ("Dolphins win!");
    } else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
        return ("Koalas win!");
    } else if (dolphinsAverageScore === koalasAverageScore && (dolphinsAverageScore && koalasAverageScore >= 100)) {
        return ("It's a draw!");
    } else {
        return ("There is no winner...");
    }
}
console.log(result(dolphinsAverageScore1, koalasAverageScore1));

console.log(result(dolphinsAverageScore2, koalasAverageScore2));

console.log(result(dolphinsAverageScore3, koalasAverageScore3));
 */

/*
// 08/19/22
// Switch Statement:
const day = `Yesterday`;

switch(day) {
    case `Monday`: // day === `Monday`
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `Tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `Wednesday`:
    case `Thursday`:
        console.log(`Write code examples`);
        break;
    case `Friday`:
        console.log(`Record videos`);
        break;
    case `Saturday`:
    case `Sunday`:
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day`);
}

// Convert switch statement to if/else statement:

if (day === `Monday`) {
    console.log(`Plan course structure\nGo to coding meetup`);
} else if (day === `Tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `Wednesday` || day === `Thursday`) {
    console.log(`Write code examples`);
} else if (day === `Friday`) {
    console.log(`Record videos`);
} else if (day === `Saturday` || day === `Sunday`) {
    console.log(`Enjoy the weekend`);
} else {
    console.log(`Not a valid day`);
}

// Statements and Expressions:
// expressions produce values
// statements can be described as full sentences
console.log(3 + 4); // expression
console.log(1991); // expression
console.log(true || (true && false)); // expression

if (23 > 10) {
    const string = `23 is greater`;
} // statement

const me = `David`;
console.log(`My name is ${me} and I'm ${2022 - 1993} years old.`);
 */

/*
// Ternary (Conditional) Operator:
const age = 28;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I can't drink yet...`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
 */

//////// Coding Challenge #4 //////////

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country,
it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this.
It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement,
and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300😉
GOOD LUCK 😀
 */

// let bill = 275;
// let bill = 40;
let bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
let total = tip + bill;

console.log(`The bill was $${bill}, the tip was $${tip}, making the total: $${total}.`);
