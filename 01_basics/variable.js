const accountName = "John Doe";
const accountBalance = 1000;

console.log("Account Name:", accountName);
console.log("Account Balance:", accountBalance);
// Attempting to change the value of a constant will result in an error
// accountName = "Jane Doe"; // This will throw an error
// accountBalance = 2000; // This will also throw an error

// If we want to have a variable that can change, we can use 'let' instead of 'const'
let mutableAccountName = "John Doe";
let mutableAccountBalance = 1000;

console.log("Mutable Account Name:", mutableAccountName);
console.log("Mutable Account Balance:", mutableAccountBalance);

// Now we can change the values of these variables
mutableAccountName = "Jane Doe";
mutableAccountBalance = 2000;

console.log("Updated Mutable Account Name:", mutableAccountName);
console.log("Updated Mutable Account Balance:", mutableAccountBalance);
