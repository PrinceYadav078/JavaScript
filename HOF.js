// Map function

let arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.map(num=>{return num*2}));
const double = (array) => {
  return array.map((num) => num * 2);
};
console.log(double(arr));

// filter function
const filter = (arr, key) => {
  let result = [];
  for (num of arr) {
    if (num > key) {
      result.push(num);
    }
  }
  return result;
};
console.log(filter(arr, 4)); // this filter written by me

console.log(arr.filter((num) => num > 3)); // inbuilt filter function

const actors = [
  {
    name: "prince",
    sal: 50000000,
  },
  {
    name: "tanmay",
    sal: 50000,
  },
  {
    name: "rohan",
    sal: 5000,
  },
  {
    name: "vineet",
    sal: 500,
  },
];

let result=actors.filter(actor=> actor.sal>500)
console.log(result);
let names=result.map(actor=>actor.name).join(", ")
console.log(names);

// reduce function
const add=(a,b)=>{return a+b}  

const mult=((a,b)=> a*b)//when we are notusing curlybraces{} then no need to return keyword

let numarr=[1,5,3,6,4]
let sum =numarr.reduce((prev,cur)=>
    prev+cur        // when we are not using curly braces{} then no need to return keyword 
)
console.log(sum);
console.log(numarr.reduce(add));
console.log(numarr.reduce(mult));

// sum of actors salary by using reduce method
let sal_sum=actors.reduce((prev,curr)=> prev + curr.sal,0)
console.log(sal_sum);