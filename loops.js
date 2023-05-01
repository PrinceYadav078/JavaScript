// WHILE LOOP


// num=0
// while(num < 100){
//     num+=1
//     console.log(num)
// }

//FOR LOOP

// for( let num=1; num<=100; num++ ){
//     console.log(num)
//     document.write(num)

// }

let users= new Array("prince", "rohan", "tanmay", "yash", "vineet")
for(user of users){
    console.log(user);
}

for(user in users){
    console.log(user);
}

let employee=[{name:"prince",age:22},{name:"tanmay",age:24}]
for(emp of employee){
    console.log(emp);
}