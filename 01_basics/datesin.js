let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toISOString());

let mycreatedDate = new Date(2026, 12, 31)
console.log(mycreatedDate.toDateString());


let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(mycreatedDate.getMinutes());

console.log(new Date().toLocaleString('default', {
    weekday: "long",
}));