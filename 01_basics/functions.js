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