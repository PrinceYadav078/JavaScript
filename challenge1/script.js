function calc_days(){
    var year=prompt("Enter your Birth Year")
    const date=new Date()
    var cur_year=date.getFullYear()
    // console.log("year=>",cur_year)
   
    if(year<=0||year>=cur_year){
        alert("Pls Enter valid Year")
    }else{
        var days=(cur_year-year)*365
        var h1=document.createElement("h1")
        h1.setAttribute("id","ageindays")
        // console.log(days)
        document.getElementById("result").appendChild(h1)
        document.getElementById("ageindays").innerHTML=`You are ${days} days old`
    }
 
   
}

function reset(){
    document.getElementById("ageindays").remove()
}