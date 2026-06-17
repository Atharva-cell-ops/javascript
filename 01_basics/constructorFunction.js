function BellBoy(name, age, hasworkpermit, languages, yearsofexperience){
    this.name = name;
    this.age = age;
    this.hasworkpermit = hasworkpermit;
    this.languages = languages;
    this.yearsofexperience = yearsofexperience;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
        this.pickUpLuggage();
        this.move();
    };
}

BellBoy.prototype.pickUpLuggage = function() {
    console.log(`${this.name} is picking up luggage.`);
};

BellBoy.prototype.move = function() {
    console.log(`${this.name} is moving luggage to the room.`);
};

let bellboy1 = new BellBoy("John", 25, true, ["English", "Spanish"], 3);
bellboy1.greet();

