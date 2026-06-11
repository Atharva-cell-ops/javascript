// singleton 

// object literals

// const Jsuser = {
//     name: "Atharva",
//     age: "18",
//     location:"Nagpur",
//     email:"atharvakale725@gmail.com",
//     isLoggedIn: false,
//     LastLoginDays: ["Monday","Tuesday"]
// }

// console.log(Jsuser.email)
// console.log(Jsuser["email"])

// Jsuser.email = "atharva@gogglekaggle.com"
// Object.freeze(Jsuser)
// Jsuser.email = "atharva@microsoft.com"
// console.log(Jsuser);

// Jsuser.greeting = function(){
//     console.log("Hello Js user");
// }

// console.log(Jsuser.greeting);

// const tinderuser = new object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sam"
tinderuser.isloggedIn = false

console.log(tinderuser);

const regularuser = {
    email:"xyz@gmail.com",
    fullname:{
        username:{
            firstname:"Atharva",
            lastname:"Kale"
        }
    }
}

const obj = {1:"a",2 : "b"}
const obj2 = {3:"a",2:"b"}

// const obj3 = {obj, obj2}
const obj3 = Object.assign({},obj,obj2)
console.log(obj3);

const course = {
    coursename: "Javascript",
    price: 999,
    courseInstructor: "Atharva"
}

const {courseInstructor: instructor} = course

console.log(instructor);

