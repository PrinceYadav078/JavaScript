let students=`[
    {
        "name":"prince",
        "age":22,
        "height":160
    },
    {
        "name":"tanmay",
        "age":24,
        "height":164
    }
]`

console.log(students)  // type string
var data= JSON.parse(students)   // convert json string to object
console.log(data);
console.log(data[1].age);  //access the jada 

var data2=JSON.stringify(data)  //converting object to json string
console.log(data2); 