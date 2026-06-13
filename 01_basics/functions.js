// // function addTwoNumbers(a,b){

// //     // let result = a+b
// //     // return result
// //     return a+b
// // }

// // const result = addTwoNumbers(43,66)
// // console.log("result:-",result)

// // function loginusername(username) {
// //     return `Hello, ${username}!`
// // }

// // console.log(loginusername("Atharva"))
// // console.log(loginusername())

// function calculateprice(...a){ // (...) dot/spread operator
//     return a
// }
// console.log(calculateprice(200,400,500))

// function calculateprice(val1,val2,...a){ // (...) dot/spread operator
//     return a
// }
// console.log(calculateprice(200,400,500,600))


const user = {
    username: "Atharva",
    prices: 100000
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)


function maketea(typeofTea){
    return `maketea :${typeofTea}`;
}
function processTeaOrder(teafunction){
    return teafunction('earl grey');
}

let order = processTeaOrder(maketea);  //function as a parameter
console.log(order);


function Teamaker(name){
    return function(teatype){
        return `making ${teatype} ${name}`;
    };
}

let teamaker = Teamaker("Atharva");
let result = teamaker("Green Tea");
console.log(result);