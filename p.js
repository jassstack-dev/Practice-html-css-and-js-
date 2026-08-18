// letuser= {
// name:"Ritik",
// age:20
// };

// letuser.age = 21;

// console.log(letuser)


// letuser= {
// name:"Ritik",
// age:20,
// city:"Bhopal"
// };


// for (let key in letuser) {
//   console.log(key + ":", letuser[key]);
// }


// let employees= {
// aman:25000,
// ritik:50000,
// priya:45000
// };

// let highestSalary = 0;
// let highestPaid = ""

// for(let key in employees){
//     if(employees[key]> highestSalary){
//         highestSalary = employees[key]
//         highestPaid = key
//     }
// }

// console.log(highestPaid)
// console.log(highestSalary)


// function  calculateDiscount(price){
//     let discount = price * 10/100
//     let result = price -discount;
//     console.log(result)
// }
// calculateDiscount(500)


//  function sum(...number){
//     let total= 0;

//     for(let num of number){
//         total += num;
//     }
// return total

// }

// console.log(sum(1,2,4))

//using reduce method

// function sum(...number){
//    let total =  number.reduce((total, num)=> total + num,0)
//    return total
// }

// console.log(sum(10,202,29))


// users = [
// { name:"Ritik", age:20 },
// { name:"Aman", age:16 },
// { name:"Priya", age:25 }
// ];

// function getAdult(users){

//     return users.filter(users => users.age > 18)


// }

// console.log(getAdult(users))


// cart= [
// { name:"Mouse", price:500, qty:2 },
// { name:"Keyboard", price:1000, qty:1 },
// { name:"Monitor", price:10000, qty:1 }
// ];

// function getCartTotal(cart){

//     let total = cart.reduce((total,item)=>{
//         return total + item.price *item.qty
//     },0)
//     return total;
// }

// console.log(getCartTotal(cart))



// let students = [
//     { name: "Ritik", marks: 80 },
//     { name: "Aman", marks: 60 }
// ];

// let name = students.map((student) =>{
// return student.name + " kumar"
// })

// console.log(name)


// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.filter((num)=>{
//     return num >30
// })


// console.log(result)

// let products = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1000 },
//   { name: "Monitor", price: 10000 }
// ];


// let name = products.map((name)=>{
//     return name.name
// })

// console.log(name)

// let students = [
//   { name: "Ritik", marks: 85 },
//   { name: "Aman", marks: 42 },
//   { name: "Rahul", marks: 72 },
//   { name: "Neha", marks: 35 }
// ];

// let passed = students.filter((user)=>{
//      return user.marks > 50

// }).map((user)=>{
//     return user.name
// })


// console.log(passed)


// let cart = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1000 },
//   { name: "Monitor", price: 10000 }
// ];

// let total = cart.reduce((tot, num)=>{
//     return tot + num.price
// },0)

// console.log(total)


// let users = [
//   { name: "Ritik", age: 22 },
//   { name: "Aman", age: 25 },
//   { name: "Neha", age: 21 }
// ];

//  for(let name of users){
//     console.log(name.name)
// }


// for(let key in users){
//     console.log(users[key])
// }



// let products = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1000 },
//   { name: "Monitor", price: 10000 }
// ];

// let amount = products.map((dis)=>{
//     let discount = dis.price * 10/100
//     let total = dis.price - discount

//     return {
//         name: dis.name,
//         price : total
//     }

// })

// console.log(amount)


// let products = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1000 },
//   { name: "Monitor", price: 10000 }
// ];


// let product = products.filter((price)=>{
//     return price.price > 1000
// })

// console.log(product)

// let marks = [80, 90, 75, 60, 95];

// let total = marks.reduce((tot, num)=>{
//    return tot +num
// },0)

// console.log(total)


// let numbers = [10, 15, 22, 31, 40, 55, 60];

// for(let i of numbers){
//     if(i % 2 === 0){
//        console.log(i)
//     }
// }

// let students = [
//   { name: "Ritik", marks: [80, 90, 85] },
//   { name: "Aman", marks: [50, 40, 60] },
//   { name: "Neha", marks: [90, 95, 92] }
// ];

// let average = students.map((student)=>{

//     let total = student.marks.reduce((sum, mark)=>{
//         return sum + mark;
//     },0)

//     let avg = total/student.marks.length

//     return {
//         name: student.name,
//         average: avg
//     }
// })

// console.log(average)


// let employees = [
//   { name: "Ritik", salary: 50000, experience: 3 },
//   { name: "Aman", salary: 30000, experience: 1 },
//   { name: "Neha", salary: 70000, experience: 5 },
//   { name: "Rahul", salary: 45000, experience: 2 }
// ];

// let employee = employees.filter((num)=>{
//     if(num.salary >= 50000 && num.experience >=3 ){
//         return num
//     }
// }).map((num)=>{
//     return num.name
// })

// employee.forEach((name) => {
//     console.log(name);
// });


// let cart = [
//   { name: "Mouse", price: 500, qty: 2 },
//   { name: "Keyboard", price: 1000, qty: 1 },
//   { name: "Monitor", price: 10000, qty: 1 }
// ];

// let total = cart.reduce((sum,itm)=>{
//     return sum + itm.price * itm.qty
// },0)

// console.log(total)

// let products = [
//   { name: "Pen", price: 20 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1000 },
//   { name: "Monitor", price: 10000 }
// ];

// for(let i of products){
//     if(i.price >= 1000){
//         console.log(i)
//         break
//     }
// }


// let users = [
//   { name: "Ritik", active: true },
//   { name: "Aman", active: false },
//   { name: "Neha", active: true },
//   { name: "Rahul", active: false }
// ];

// let activeUser = users.filter((user)=>{
//     return user.active === true
// }).map((user)=>{
//     return user.name
// })

// console.log(activeUser)


// let students = [
//   { name: "Ritik", marks: 85 },
//   { name: "Aman", marks: 45 },
//   { name: "Neha", marks: 75 },
//   { name: "Rahul", marks: 30 }
// ];

// let passedStudent = students.filter((student)=>{
//     return student.marks >=50
// }).reduce((sum, mark)=>{
//     return sum+mark.marks
// },0)

// console.log(passedStudent)


// let employees = [
//   { name: "Ritik", salary: 50000 },
//   { name: "Aman", salary: 30000 },
//   { name: "Neha", salary: 70000 }
// ];

// let salaryIncrement = employees.map((inc)=>{
//      let increment = inc.salary + inc.salary * 10/100
//      return increment
// })

// console.log(salaryIncrement)

// const users = [
//     { id: 1, name: "Aman", isActive: true },
//     { id: 2, name: "Riya", isActive: false },
//     { id: 3, name: "Jass", isActive: true },
//     { id: 4, name: "Neha", isActive: false },
// ];


// Task:

// Sirf active users ka naya array banao.

// let activeUser = users.filter((user) => {
//     return user.isActive === true;
// })

// console.log(activeUser)


// const products = [
//     { id: 1, name: "Laptop", price: 50000, inStock: true }, 
//     { id: 2, name: "Mouse", price: 800, inStock: false }, 
//     { id: 3, name: "Keyboard", price: 1500, inStock: true }, 
//     { id: 4, name: "Monitor", price: 12000, inStock: true },
// ];


// let productStock = products.filter((product)=>{
//     return product.inStock
// }).map((product)=>{
//     return product.name
// })

// console.log(productStock)

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
let num = prompt("enter the number:")

// if(num >0){
//     console.log("positive")
// }else{
//     console.log("negative")
// }



// 2. Check whether a number is even or odd.




if(num%2 === 0){
    console.log("number is even")
}else{
    console.log("number is odd")
}
