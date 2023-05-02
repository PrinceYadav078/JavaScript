const promise1 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        istrue=[true,false][Math.floor(Math.random()*2)]
        istrue?resolve("Soup is ready "):reject("no soup today")
    },2000)
})

promise1.then(success=> console.log(success))
.catch(err=> console.log(err))

// dog api
console.log("fetch:",
fetch("https://dog.ceo/api/breeds/image/random")    //fetch is a promise
.then(response=> response.json())          //response is also a promise
.then(data=>console.log(data))
)