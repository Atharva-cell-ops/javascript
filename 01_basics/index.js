let housekeeper = {
    yearsofexperience: 20,
    name: "Martha",
    age: 45,
    duties: ["cleaning", "laundry", "cooking"],
    greet: function() {
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
    }
};

housekeeper.greet(); // Output: Hello, my name is Martha. I am 45 years old.
console.log("Years of experience:", housekeeper.yearsofexperience); // Output: 20
console.log("Duties:", housekeeper.duties); // Output: ["cleaning", "laundry", "cooking"]