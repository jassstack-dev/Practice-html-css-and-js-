// Question 1 (Easy) — Find Expensive Products
// let prices= [100,250,500,150,700];
// Create a new array containing only prices greater than 300.
// What is this question asking?
// Imagine you're building an e-commerce website.
// You only want to show premium products that cost more than ₹300.
// Input:
// [100,250,500,150,700]
// output
// [500,700]


// let prices= [100,250,500,150,700];

// const newPrices = prices.filter((price)=> price > 300)
// console.log(newPrices)  // [500,700]


// Question 2 (Moderate) — Student Average
// let marks= [80,90,70,85,95];
// Calculate the average marks of all students.
// What is this question asking?
// A teacher has marks of students stored inside an array.

let marks= [80,90,70,85,95];
const sum = marks.reduce((acc, curr)=>{
    return acc + curr;
}, 0)



let average = sum/5

console.log(average)


