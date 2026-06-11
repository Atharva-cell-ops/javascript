let a = 20
const b  = 30
var c = 40

a = 30000
if(true){
    let a = 10
    const b = 20
    console.log("INNER",a);
}
console.log(c)
console.log(b)
console.log(a)