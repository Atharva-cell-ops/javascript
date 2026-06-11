// let a = 20
// const b  = 30
// var c = 40

// a = 30000
// if(true){
//     let a = 10
//     const b = 20
//     console.log("INNER",a);
// }
// console.log(c)
// console.log(b)
// console.log(a)

function one(){
    const username = "Atharva"

    function two(){
        const website = "Goggle"
        console.log(username);
    }
    // console.log(website);

    two()

    if(true){
        const username = "Atharva"
        if(username==="Atharva"){
            const website = "Insta"
            console.log(username + website);
        }
    }
}

one()
// console.log(username)