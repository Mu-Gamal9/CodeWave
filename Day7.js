// Task 1
console.log("Task 1: Modify Array Elements & Length");
let fruits = ["apple", "banana", "orange"];
console.log("Original array:", fruits);

fruits.push("grape");
console.log("After push('grape'):", fruits);

fruits.pop();
console.log("After pop():", fruits);

fruits.shift();
console.log("After shift():", fruits);

fruits.unshift("mango");
console.log("After unshift('mango'):", fruits);

// Task 2
console.log("\nTask 2: Filter and Map Array Elements");
const numbers = [1, 2, 3, 4, 5, 6];
console.log("Original numbers array:", numbers);

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Filtered even numbers:", evenNumbers);

const squaredEvenNumbers = evenNumbers.map(number => number * number);
console.log("Mapped squared even numbers:", squaredEvenNumbers);