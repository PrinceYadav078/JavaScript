//Rules for using async/ await
//1=> you must create a function
//2=> you must use a keyword async before function
//3=> you must use a keyword await before promise 

const getdog=async()=>{
    const url="https://dog.ceo/api/breeds/image/random"     // dog api
    const response=await fetch(url)
    const data=await response.json()
    console.log(data)
}
// getdog()

//  restaurant soup example
const promise1 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        istrue=[true,false][Math.floor(Math.random()*2)]
        istrue?resolve("Soup is ready "):reject("no soup today")
    },2000)
})

const getsoup=async()=>{
   try {
    const soup=await promise1
    console.log(soup)
   } catch (error) {
    console.log(error);
   }
}
// getsoup()


// Resolved - if waiter brings you soup
//tip the waiter
// you pay for soup
// Rejected -leave a bad review no tip
const getsoup2=async ()=>{
    const data={rating:null,tip:null,pay:null,review:null}
    try {
        const soup=await promise1
        console.log(soup)
        data.pay=100
        data.rating=5
        data.tip=20
        data.review="Awesome soup"
    } catch (error) {
        console.log(error)
        data.pay=0
        data.rating=1
        data.tip=0
        data.review="Bad resturant"
    }
    return data
}

getsoup2().then(value=> console.log(value)) 

//asyncronous function return promise thats why we use .then with getsoup2 or we can use async await which is used in showdata function both are working

const showdata=async()=>{
    const data= await getsoup2()
    console.log(data)
}
// showdata()