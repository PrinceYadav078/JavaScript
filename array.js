let fruits=["apple", "orange", "mango", "kiwi"]
let users= new Array("prince", "rohan", "tanmay", "yash", "vineet")
console.log(users);
console.log(fruits)

console.log(fruits[1]); // accessing on the basis of index
users[users.length-1]="sanskar" // replace the elements on the basis of index   so in users arrary vineet is replaced by sanskar

console.log(users);

for(let i=0;i<users.length;i++){
    console.log(users[i])
}

// arrays common method
console.log(fruits.toString());   //converting Array to String
console.log(fruits.join("-"));  // after joining every elem by (-) its type is string 

console.log(fruits); 


console.log(users);
console.log(users.pop());  // remove last elements
console.log(users);
users.push("abhi");     // add elements in last
console.log(users); 
console.log(users.shift())  // remove first elements
console.log(users);

let finarr=fruits.concat(users) // combining two array
console.log(finarr)
console.log(finarr.slice(1,5))  // split array from  index 1 to (5-1)
console.log(finarr.reverse()) // reverse the array

console.log(users.sort());  // sort user array in alphabatical order
 
let somenum= [25,32,5,6,9,45,87,39]
console.log(somenum.sort((a,b)=>{return a-b})); // somenum array sort in ascending order
console.log(somenum.sort((a,b)=>{return b-a})); // somenum array sort in descending order

console.log(somenum);

let emptyarr=new Array()
for(let i=0;i<10;i++){
    emptyarr.push(i)
}
console.log(emptyarr);