// // // const name = prompt("what's your name:-");

// // // let firstchar = name.slice(0,1);

// // // let uppercasefirstchar = firstchar.toUpperCase();

// // const prompt = require("prompt-sync")();

// // const name = prompt("What's your name: ");
// // console.log(`Hello, ${name}!`);

// // let firstchar = name.slice(0,2);

// // let restname = name.slice(1,6);

// // console.log(firstchar);
// // console.log(restname);

// // console.log("Hello"+ name.toUpperCase());

// const prompt = require("prompt-sync")();
// let dogage = prompt("what is your dog's age:-");
// let humanage = ((dogage-2)*4+21);

// console.log("Your dog age is"+ humanage+ "years old in human years");

// function getmilk(money){
//     console.log("leavehouse");
//     console.log("move right");
//     console.log("move right");
//     console.log("move right");
//     console.log("move right");
//     console.log("buy milk");
//     console.log("move left");
//     console.log("move left");
//     console.log("move left");
//     console.log("move left");
//     console.log("enter house");
//     // ensure money is a number
//     let amount = Number(money);
//     let numberofbottles = amount / 1.5;
//     console.log("number of bottles bought: " + numberofbottles);
//     return numberofbottles;

//     return money%1.5;
// }

// // call the function
// // var change = getmilk(10);
// // console.log("change: " + change);


// function calcBottles(startmoney, costperbottle){
//     let numberofbottles = Math.floor(startmoney / costperbottle);
//     return numberofbottles;
// }

// getmilk(10);

const prompt = require("prompt-sync")();
prompt("What's your name:- ");
prompt("What's their name:- ")

let lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;
console.log("your love score is:- " + lovescore);