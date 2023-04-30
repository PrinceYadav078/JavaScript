// STRINGS IN JAVASCRIPT (COMMON METHOD)

let fruit = "banana,apple,orsnge,kiwi"
let moreFruit="banana\napple"  //NEW LINE
console.log(moreFruit)

console.log(fruit.length)  // finding length of string
console.log(fruit.indexOf("an"))  // finding starting index of alphabet or word
console.log(fruit.slice(2,6))  // separating string on the basis of index
console.log(fruit.replace('ban', '123')) 
console.log(fruit.toUpperCase())  //CONVERT THE STRING TO UPPERCASE
console.log(fruit.toLowerCase())
console.log(fruit.charAt(2))  // find character on the basis of index
console.log(fruit[2])  // find character on the basis of index
console.log(fruit.split('')) // split by a character and store in a array
console.log(fruit.split(',')) // split by a comma and store in a aaray
// console.log(fruit);