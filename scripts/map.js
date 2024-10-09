// Simple example of using map
const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number doubled
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

// Complex example of using map
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Using map to create an array of user names
const userNames = users.map((user) => user.name);
console.log(userNames); // Outputs: ['Alice', 'Bob', 'Charlie']
