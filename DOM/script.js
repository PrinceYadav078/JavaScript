var divtag =document.createElement("div")
divtag.className="title"
var h1=document.createElement("h1")
h1.className="h1"
h1.innerHTML="Hello World"
divtag.append(h1)
document.getElementById("body").appendChild(divtag)
// document.querySelector("h1").style.backgroundColor="red"
let heading= document.getElementsByClassName("h1")[0]
heading.style.backgroundColor="red"

// document.querySelector(".red").onclick=()=>{console.log("red")}
// document.querySelector(".green").onclick=()=>{console.log("green")}
// document.querySelector(".yellow").onclick=()=>{console.log("yellow")}

var squares=document.querySelectorAll(".squarebox")
let timesclicked={"red":0,"green":0,"yellow":0}
squares.forEach(square=>{
    square.onclick=()=>{
         timesclicked[square.value]+=1
         square.innerText=timesclicked[square.value]
         
    }
})

function clear_square(){
    timesclicked.red=0
    timesclicked.green=0
    timesclicked.yellow=0
    squares.forEach(square =>square.innerText='')
}

let cleargamebtn=document.getElementById("clearbtn")
cleargamebtn.onclick=()=> clear_square()
