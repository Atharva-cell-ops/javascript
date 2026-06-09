const name = "atharva"
const repocount = 50

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String("asthetic")

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(typeof gamename);

console.log(gamename.toUpperCase());
console.log(gamename.charAt(0));

const newstring1 = gamename.substring(0,4)
console.log(newstring1);

const newstring2 = gamename.slice(-8,6)
console.log(newstring2);

console.log(gamename.split(''));

const newstring = "Atharva"
console.log(newstring);
console.log(newstring.trim());