// Simple example of using forEach
const numbers = [1, 2, 3, 4, 5];

// Using forEach to log each number to the console
numbers.forEach((number) => {
  console.log(number); // Outputs: 1, 2, 3, 4, 5
});

// Complex example of using forEach
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Using forEach to print a custom message for each user
users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old.`);
  // Outputs:
  // Alice is 25 years old.
  // Bob is 30 years old.
  // Charlie is 35 years old.
});
