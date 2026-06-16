function BellBoy(name, age, hasworkpermit, languages, yearsofexperience){
    this.name = name;
    this.age = age;
    this.hasworkpermit = hasworkpermit;
    this.languages = languages;
    this.yearsofexperience = yearsofexperience;
}

let bellBoy = new BellBoy("Timmy", 50, true, ["French", "Indian", "English"], 20);
console.log(bellBoy);
