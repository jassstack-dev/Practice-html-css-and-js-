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













