// ## Console & Basics

// 1. Print `"Hello JavaScript"` in the console.
// 2. Print your name, age, and city using one `console.log()`.
// 3. Print a warning message using `console.warn()`.
// 4. Print an error message using `console.error()`.
// 5. Use `console.table()` to display an array of 5 numbers.

// console.log("hello javaScript")
// console.log("vimal 24 Delhi")
// console.warn("warn hai bhai isme")
// console.log("error")
// const fruit = ["apple", "banana", "orange"]
// console.table(fruit)

// ## Variables

// 1. Create a variable called `studentName` and store your name in it.
// 2. Create a variable `age` and print it.
// 3. Create two variables and swap their values.
// 4. Create a constant variable for `PI` and print it.
// 5. Declare a variable without assigning a value and print it.
// 6. Create a variable `score` and increase it by 10.
// 7. Create three variables for first name, last name, and full name.

// let studentName = "vimal"
// let age  = 20;
// console.log(age)

// let num = 2;
// let num2 = 3;


// [num, num2] = [num, num2]

// console.log(num,num2)

// Create a constant variable for `PI` and print it.

// const PI = 3.14159;
// console.log(PI);



// Declare a variable without assigning a value and print it.

// let name ;
// console.log(name)


// Create a variable score and increase it by 10.

// let score = 20;
// score += 10;
// console.log(score)


// Create three variables for first name, last name, and full name.

// let firstName = "vimal";
// let lastName = "kumar";
// let fullName = firstName + " " + lastName;

// console.log(fullName)



// ## Data Types

// Create variables of type string, number, boolean, null, and undefined.

// let name = 'fimql';
// let num = 10;
// let sonu = true;
// let num2 = null;
// let shyan;


// Check the type of different variables using typeof.
// console.log(typeof name)
// console.log(typeof num)
// console.log(typeof sonu)
// console.log(typeof num2)
// console.log(typeof shyan)

// Store your mobile number in a variable and check its type.

// let mobileNumber = 9675219183;
// console.log(typeof mobileNumber)

// Create a variable with value null and check its type.
// let num = null
// console.log(typeof num)


// Create a bigint number and print it.

// const num = 1000000000000000000000000000000000000000000000000000000n
// console.log(num)


// Type Conversion & Coercion

// Convert the string "50" into a number.
// let num = '50'

// console.log(Number(num))
// console.log(typeof Number(num))

// Convert the number 100 into a string.// let num = '50'

// let num = 100
// console.log(String(num))
// console.log(typeof String(num))

// Convert "true" into a boolean.

// const bool = "true"

// console.log(Boolean(bool))
// console.log(typeof Boolean(bool))


// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`

// console.log("5" +2)  //52
// console.log("5"-2) //3
// console.log(true + 1) //1 because true consider as 1 and false 0

// Create a variable with value "123abc" and convert it into a number.

// const num = "123abc"

// console.log(Number(num))  //nan


// Use parseInt() on "500px".

// console.log(parseInt("500px"))


// Operators

// Add two numbers and print the result.
// 2. Find the remainder when 25 is divided by 4.
// 3. Find the square of a number using exponent operator.
// 4. Increment a variable using `++`.
// 5. Decrement a variable using `-`.
// 6. Use `+=` operator to increase a variable by 20.
// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
// 8. Check if two values are strictly equal using `===`.
// 9. Compare `"10"` and `10` using both `==` and `===`.
// 10. Create two boolean variables and test `&&`, `||`, and `!`.

// console.log(10+20) 
// console.log(25%4)
// console.log(5 **2 )

// let a = 5
// a++
// console.log(a)

// let a = 6
// a--
// console.log(a)


// let  a = 5;
// a += 20
// console.log(a)


// Compare two numbers using `>`, `<`, `>=`, `<=`.

// console.log(7 >5)
// console.log(7<5)
// console.log(7>=7)
// console.log(7<=2)

// Check if two values are strictly equal using `===`.


// console.log("10" === 10)   //false it is equal in value but in the typeof not
// console.log(10 === 10) //here value and type are equal


// Compare `"10"` and `10` using both `==` and `===`.
// console.log("10" == 10)  //value same
// console.log("10" === 10)  //value same but type not same one is string anf second is number


// 10. Create two boolean variables and test `&&`, `||`, and `!`.

// let a = true;
// let b = false;

// console.log(a || b) //if one is true then true
// console.log(a && b)  //if both are true then true otherwise one is false answer become false
// console.log( !a)  //just opposite to answer 


// ## Strings

// 1. Create a string and print its length.
// 2. Convert a string into uppercase.
// 3. Convert a string into lowercase.
// 4. Check if a string includes the word `"JavaScript"`.
// 5. Extract the word `"World"` from `"Hello World"`.
// 6. Replace `"apple"` with `"mango"` in a sentence.
// 7. Split `"HTML,CSS,JS"` into an array.
// 8. Remove extra spaces from a string.
// 9. Repeat the word `"Hi"` 5 times.
// 10. Print the first character of a string.
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`


// Create a string and print its length.
// let name = "vimal"
// console.log(name.length)  //5


// Convert a string into uppercase.
// let name = "vimmal"
// console.log(name.toUpperCase())

// Convert a string into lowercase.
// console.log(name.toLowerCase())


// Check if a string includes the word `"JavaScript"`.

// let text = "i practice the question of javaScript daily"
// console.log(text.includes("javaScript"))

// Extract the word `"World"` from `"Hello World"`.

// let string = "hello world"
// console.log(string.slice(6))


//Replace `"apple"` with `"mango"` in a sentence.

// let taste = "i like to eat apple"
// console.log(taste.replace("apple", "mango"))

// Split `"HTML,CSS,JS"` into an array.
// let split = "HTML CSS JS"
// console.log(split.split(" "))  //[ 'HTML', 'CSS', 'JS' ]

// Remove extra spaces from a string.
// let name = "  hello  "
// console.log(name)
// console.log(name.trim())

// Repeat the word `"Hi"` 5 times.
// console.log("Hi ".repeat(5));

// 10. Print the first character of a string.

// let name = "cimmal"
// console.log(name[0])
// console.log(name.charAt(0))

//  Use template literals to print:`"My name is Aman and I am 20 years old"`

// console.log(`My name is Aman and I am 20 years old`)


// Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// 2. Find the square root of 81.
// 3. Find the maximum number from `10, 20, 5, 99`.
// 4. Generate a random number between 1 and 10.
// 5. Convert `"99.99"` into an integer.
// 6. Check whether `25` is an integer or not.
// 7. Use `toFixed(2)` on `3.141592`.

// console.log(Math.round(4.7))
// console.log(Math.sqrt(81))
// console.log(Math.max(10,20,5,99))
// console.log(Math.random()) 

// Math.floor(Math.random() * (max - min + 1)) + min

// let num = Math.floor(Math.random() * 10) + 1;

// console.log(num);

// Convert `"99.99"` into an integer.


// console.log(parseInt(99.99))
// let num = Number.isInteger(25)
// console.log(num)


// Use `toFixed(2)` on `3.141592`.

// let num = 3.141592
// console.log(num.toFixed(2))



// ## Conditionals

// 1. Check whether a number is positive or negative.
// 2. Check whether a number is even or odd.
// 3. Check whether a person is eligible to vote.
// 4. Find the largest among two numbers.
// 5. Find the largest among three numbers.
// 6. Check whether a year is a leap year.
// 7. Check whether a number is divisible by both 3 and 5.
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// 1. Check whether a character is a vowel or consonant.
// 2. Create a calculator using `switch` statement.
// 3. Print the day name based on a number (1–7).
// 4. Check whether a username is `"admin"` and password is `"1234"`.



// 1. Check whether a number is positive or negative.
// let num = prompt("enter the number:")

// if(num >0){
//     console.log("positive")
// }else{
//     console.log("negative")
// }



// 2. Check whether a number is even or odd.
// if(num%2 === 0){
//     console.log("number is even")
// }else{
//     console.log("number is odd")
// }

// Check whether a person is eligible to vote.

// let age = prompt('enter your age ')

// if(age >=18){
//     console.log('you are eligible for vote')
// }else{
//     console.log('sorry ! you are not eligible for vote')
// }
    

// 4. Find the largest among two numbers.

// let num1 = prompt("enter the first number")
// let num2 = prompt("enter the second number")

// if(num1 > num2){
//     console.log("first is greater then seconds")
// }else{
//     console.log("second is greater then first")
// }


// Find the largest among three numbers.

// let num1 = prompt("enter the first number")
// let num2 = prompt("enter the second number")
// let num3 = prompt('enter the third number')

// if(num1 > num2 && num1 > num3){
//     console.log('first number is greater then second and third')
// }else if(num2 > num1 && num2 > num3){
//     console.log("second number is greater than first and third")
// }
// else if(num3 > num1 && num3 >num2){
//     console.log("third number is greater than first and second")
// }
// else if(num1 === num2 && num1 === num3){
//     console.log("all no are equal")
// }


// Check whether a year is a leap year.

// let year = prompt('enter the year')

// if(year%400 === 0 || (year%4 === 0 && year%100 != 0)){
//     console.log(`${year} is the leap year`)
// }else{
//     console.log(`${year} is not the leap year`)
// }



// Check whether a number is divisible by both 3 and 5.

// let num1 = prompt("enter the first no")


// if(num1 % 3 === 0 && num1 % 5 === 0){
//     console.log("num is divisible by 3 and 5 both")
// }else{
//     console.log("num is not divisible by both")
// }

//  90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

// let marks = Number(prompt("Enter the marks"));

// if (marks > 100 || marks < 0) {
//     console.log("Marks should be between 0 and 100");
// }
// else if (marks >= 90 && marks <= 100) {
//     console.log("Grade A");
// }
// else if (marks >= 75 && marks < 90) {
//     console.log("Grade B");
// }
// else if (marks >= 50 && marks < 75) {
//     console.log("Grade C");
// }
// else {
//     console.log("Fail");
// }


// Check whether a character is a vowel or consonant.

// let char = prompt("enter the char").toLowerCase();

// let vowels = ["a", "e", "i", "o","u"]

// if(vowels.includes(char)){
// console.log("vowels")
// }else{
//     console.log("consonent")
// }


// Create a calculator using `switch` statement.



// let num1 = Number(prompt("num1"));
// let num2 = Number(prompt("num2"));
// let operator = prompt("operator");
// switch (operator) {
//     case "+":
//         console.log(num1+num2)
//         break;

//     case "-":
//         console.log(num1-num2)
//         break;

//     case "*":
//         console.log(num1*num2)
//         break;

//     case "/":
//         console.log(num1/num2)
//         break;

//     default:
//         console.log("invalid operator")
// }


//  Print the day name based on a number (1–7).

// let num = Number(prompt('enter num between 1 to 7'))

// switch(num){
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;
//     case 4:
//         console.log("Wednesday")
//         break;
//     case 5:
//         console.log("Thursday")
//         break;
//     case 6:
//         console.log("Friday")
//         break;
//     case 7:
//         console.log("Saturday")
//         break;

//     default:
//         console.log("invalid no")
// }


//  Check whether a username is `"admin"` and password is `"1234"`.

// let name = prompt('enter the name')
// let password =(prompt("enter the 4 digit password"))

// if(name === "admin" && password === "1234"){
//     console.log("welcome to the Admin Dashboard")
// }else{
//     console.log("welcome to the user dashboard")
// }


// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.
// 2. Check whether `0` is truthy or falsy.
// 3. Check whether `[]` is truthy or falsy.
// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.

// . Check whether an empty string is truthy or falsy.
// let str = ""

// if(str){
//     console.log(true)
// }else{
//     console.log(false)
// }


// 2. Check whether `0` is truthy or falsy.
// let num = 0

// if(num){
//     console.log(true)
// }else{
//     console.log(false)
// }

//  Check whether `[]` is truthy or falsy.
// let arr = []

// if(arr){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.

// let variable = prompt("enter the Value")

// if(variable){
//     console.log("valid")
// }else{
//     console.log("invalid")
// }


// ternary Operator

// condition ? valueIfTrue : valueIfFalse

// Check whether a number is even or odd using ternary operator.

// let num = 11;

// num % 2 === 0 ? console.log("even") : console.log("odd")


// Check whether age is above 18 using ternary operator.

// let age = prompt("enter the age")

// age >=18 ? console.log(`${age} is greater than or equal to 18`) : console.log(`${age} is less than  18`)


// Find the greater number between two values using ternary operator.

// let a = prompt('a')
// let b = prompt('b')

// a>b ? console.log(`${a} is greater than ${b}`): console.log(`${a} is less than ${b}`)


// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
// 2. Calculate the area of a rectangle.
// 3. Calculate the simple interest.
// 4. Convert temperature from Celsius to Fahrenheit.
// 5. Convert kilometers into meters.
// 6. Calculate total marks and percentage of 5 subjects.
// 7. Calculate electricity bill based on units consumed.
// 8. Create a username generator using first name and birth year.
// 9. Check whether a string starts with a specific letter.
// 10. Count the total characters in a sentence excluding spaces


// 1. Create a mini biodata program using variables and template literals.

// let name = prompt('Enter the name ')
// let age = Number(prompt("enter the age"))

// console.log(`your name is ${name} and your age is ${age}`)


//  Calculate the area of a rectangle.

// let length = prompt("length")
// let breadth = prompt("breadth")

// console.log(`Area of reactangle of length ${length} and breadth ${breadth} is`, length*breadth)


//  Calculate the simple interest.

let p = prompt("enter the principal")
let r = prompt("enter the rate of interest")
let t = prompt("enter the time")

let si = (p*r*t)/100;

console.log('simple intrest is:', si)












