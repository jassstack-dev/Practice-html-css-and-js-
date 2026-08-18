// ============================================================
// JAVASCRIPT PHASE 1 — BASICS PRACTICE
// ============================================================

// ============================================================
// 01. CONSOLE & BASICS
// ============================================================

// Q1. Print "Hello JavaScript" in the console.

// Solution:
console.log("Hello JavaScript");


// Q2. Print your name, age, and city using one console.log().

// Solution:
console.log("Vimal", 24, "Delhi");


// Q3. Print a warning message using console.warn().

// Solution:
console.warn("This is a warning message");


// Q4. Print an error message using console.error().

// Solution:
console.error("This is an error message");


// Q5. Use console.table() to display an array of 5 numbers.

// Solution:
const numbers = [10, 20, 30, 40, 50];
console.table(numbers);


// ============================================================
// 02. VARIABLES
// ============================================================

// Q1. Create a variable called studentName and store your name.

// Solution:
let studentName = "Vimal";
console.log(studentName);


// Q2. Create a variable age and print it.

// Solution:
let age = 24;
console.log(age);


// Q3. Create two variables and swap their values.

// Solution:
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);


// Q4. Create a constant variable for PI and print it.

// Solution:
const PI = 3.14159;
console.log(PI);


// ============================================================
// 03. DATA TYPES
// ============================================================

// Q1. Create variables of type string, number, boolean, null,
//     and undefined.

// Solution:
let name = "Vimal";
let number = 100;
let isStudent = true;
let value = null;
let undefinedValue;

console.log(typeof name);
console.log(typeof number);
console.log(typeof isStudent);
console.log(typeof value);
console.log(typeof undefinedValue);


// ============================================================
// 04. TYPE CONVERSION & COERCION
// ============================================================

// Q1. Convert the string "50" into a number.

// Solution:
let strNumber = "50";

console.log(Number(strNumber));


// Q2. Convert the number 100 into a string.

// Solution:
let num = 100;

console.log(String(num));


// Q3. Check the output of "5" + 2.

// Solution:
console.log("5" + 2); // "52"


// Q4. Check the output of "5" - 2.

// Solution:
console.log("5" - 2); // 3


// ============================================================
// 05. OPERATORS
// ============================================================

// Q1. Add two numbers.

// Solution:
console.log(10 + 20);


// Q2. Find the remainder when 25 is divided by 4.

// Solution:
console.log(25 % 4);


// Q3. Find the square of a number using exponent operator.

// Solution:
console.log(5 ** 2);


// ============================================================
// 06. STRINGS
// ============================================================

// Q1. Create a string and print its length.

// Solution:
let text = "JavaScript";

console.log(text.length);


// Q2. Convert a string into uppercase.

// Solution:
console.log(text.toUpperCase());


// Q3. Convert a string into lowercase.

// Solution:
console.log(text.toLowerCase());


// Q4. Check if a string includes the word "JavaScript".

// Solution:
let sentence = "I am learning JavaScript";

console.log(sentence.includes("JavaScript"));


// ============================================================
// 07. NUMBERS & MATH
// ============================================================

// Q1. Round 4.7 using Math.round().

// Solution:
console.log(Math.round(4.7));


// Q2. Find the square root of 81.

// Solution:
console.log(Math.sqrt(81));


// Q3. Find the maximum number.

// Solution:
console.log(Math.max(10, 20, 5, 99));


// Q4. Generate a random number between 1 and 10.

// Solution:
let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);


// ============================================================
// 08. CONDITIONALS
// ============================================================

// Q1. Check whether a number is positive or negative.

// Solution:
let checkNumber = Number(prompt("Enter a number"));

if (checkNumber > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}


// Q2. Check whether a number is even or odd.

// Solution:
let evenOddNumber = Number(prompt("Enter a number"));

if (evenOddNumber % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// Q3. Check whether a person is eligible to vote.

// Solution:
let voterAge = Number(prompt("Enter your age"));

if (voterAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// ============================================================
// 09. SWITCH STATEMENT
// ============================================================

// Q1. Print the day name based on a number (1–7).

// Solution:
let day = Number(prompt("Enter a number between 1 and 7"));

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid number");
}


// ============================================================
// 10. TRUTHY & FALSY
// ============================================================

// Q1. Check whether an empty string is truthy or falsy.

// Solution:
let emptyString = "";

if (emptyString) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}


// Q2. Check whether an empty array is truthy or falsy.

// Solution:
let emptyArray = [];

if (emptyArray) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}


// ============================================================
// 11. TERNARY OPERATOR
// ============================================================

// Q1. Check whether a number is even or odd using ternary.

// Solution:
let ternaryNumber = 11;

ternaryNumber % 2 === 0
    ? console.log("Even")
    : console.log("Odd");


// ============================================================
// 12. MIXED PRACTICE
// ============================================================

// Q1. Create a mini biodata program.

// Solution:
let userName = prompt("Enter your name");
let userAge = Number(prompt("Enter your age"));

console.log(`Your name is ${userName} and your age is ${userAge}`);


// Q2. Calculate the area of a rectangle.

// Solution:
let length = Number(prompt("Enter length"));
let breadth = Number(prompt("Enter breadth"));

let area = length * breadth;

console.log(
    `Area of rectangle = ${area}`
);


// Q3. Calculate simple interest.

// Solution:
let principal = Number(prompt("Enter principal"));
let rate = Number(prompt("Enter rate"));
let time = Number(prompt("Enter time"));

let simpleInterest = (principal * rate * time) / 100;

console.log(`Simple Interest = ${simpleInterest}`);