// Simple example of using filter
const numbers = [1, 2, 3, 4, 5];

// Using filter to create a new array with even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4]

// Complex example of using filter
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// Using filter to create an array of users who are 30 or older
const olderUsers = users.filter((user) => user.age >= 30);
console.log(olderUsers); 
// Outputs: 
// [
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ]
