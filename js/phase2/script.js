// Create a function named greet that prints "Hello World".

function greet(){
    console.log("hello world")
}

greet()


// Create a function add(a, b) that returns the sum.

function add(a,b){
    return a+b;
}

console.log(add(3,6))

// Write a function to calculate the square of a number.

function sqrt(a){
    return a*a
}

console.log(sqrt(6))

// Create a function that checks whether a number is even or odd.

function find(a){
    if(a%2 === 0){
        return 'even number'
    }else{
        return "odd number"
    }
}

console.log(find(10))
console.log(find(15))

// Write a function that converts Celsius to Fahrenheit.

function cToF(celsius){
    return (celsius * 9/5)+32;
}

console.log(cToF(78)) //172.4

// Create a function with default parameter "Guest".

function def(name= "guest"){

return name;
}

console.log(def())  //default
console.log(def("vimal")) 

// Write a function that returns the greater of two numbers.

function greater(num1, num2){
    if(num1>num2){
        return `${num1} is greater than num2`
    }
    else if(num2 >num1){
        return `${num2} is greater than num1`
    }
    else{
        return `${num1} & ${num2} are equal`
    }
}

console.log(greater(10,16))
console.log(greater(10,10))

// Create a function to calculate area of rectangle.
function area(l,b){
    return `area of reactange is ${l*b}` ;
}

console.log(area(10,15))


// Write a function that returns "Adult" if age ≥ 18 else "Minor".

function age(age){
     if(age >= 18){
        return "Adult"
     }else{
        return "Minor"
     }
}

console.log(age(16))
console.log(age(19))


// Create a function to reverse a string.

function reverseString(string){
    let rev = string.split("").reverse().join("")  //here split make a array of char and reverse reverse the character and join again making it string
    return rev
}

console.log(reverseString("vimal"))

// Write a function expression for multiplication.

let expression = function(a,b){
    return a*b
}

console.log(expression(10,13))

// Convert a normal function into an arrow function.

function normalFunciton(a){
return a;
}

let arrowFunciton = (a)=>{
return a
}

console.log(normalFunciton(16))
console.log(arrowFunciton(67))

// Create a function that accepts unlimited numbers and returns their sum using rest operator.  

function unlimited(...numbers){
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(unlimited(10,12,1,2,1,2,12,))

// Write a function that counts vowels in a string.
function countVowel(str){
    let count = 0;

    for(let char of str){
        if("aeiou".includes(char.toLowerCase())){
            count++
        }
    }
    return count;
}

console.log(countVowel("vimal"))
console.log(countVowel("Priyanka"))
console.log(countVowel("neetu"))

// Create a function that checks if a string is palindrome.

function palindrome(str){
    let reverseString = str.split("").reverse().join("")

    if(str === reverseString){
        return `${str} is palindrome`
    }else{
        return  `${str} is not palindrome`
    }
}

console.log(palindrome("madam"))
console.log(palindrome("aaaa"))

// Write a callback function example using setTimeout.

