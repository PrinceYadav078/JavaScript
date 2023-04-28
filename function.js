// FUNCTIONS STEPS-:
// 1. CREATE A FUNCTION 
// 2. CALL THE FUNCTION


// 1. CREATE A FUNCTION 

function fun() {
    console.log(" this is a function ")

}

fun()

// Lets create a function that take in a name and says hello followed by your name
// for example 
// Name : "Qazi"
//return : "Hello Qazi"

function greeting (yourNmae){
    var final= "Hello " + yourNmae
    console.log(final)

}

var name=prompt("What is your name ?")
greeting(name)

//HOW DO ARGUEMENTS WORK IN FUNCTIONS?
// HOW DO WE ADD 2 NUMBERS TOGETHER IN A FUNCTION

function sumNumber(num1, num2){
    var sum= num1+num2
    console.log(sum)
}

sumNumber(10, 20)