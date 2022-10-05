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
 */

const cutFruitPieces = fruit => {return fruit * 4};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    return `Juice with ${apples} apples and ${oranges} oranges.`;
}

