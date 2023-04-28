let age=25
if(age>0&&age<18){
    console.log("minor")
}else if(age>=18){
    console.log("major")
}else{
    console.log("invalid age");
}


function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    if(a>b)
    console.log(a-b);
    else
    console.log(b-a)
}
//ch= 1 for add
//ch= 2 for sub
let ch=2
switch(ch){
    case 1:
        add(4,6)
        break;
    case 2:
        sub(4,6)
        break;
}