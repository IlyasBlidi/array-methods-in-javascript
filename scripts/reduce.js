// Simple example of using reduce
const numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of the numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Outputs: 15

// Complex example of using reduce
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Using reduce to calculate the average age of users
const totalAge = users.reduce((accumulator, user) => accumulator + user.age, 0);
const averageAge = totalAge / users.length;
console.log(averageAge); // Outputs: 30
