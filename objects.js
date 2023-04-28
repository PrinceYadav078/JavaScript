let student={
    F_name:"Prince",
    L_name:"Yadav",
    age:22,
    fun:function(){
        return this.F_name + "\n" + this.L_name
    }
}

console.log(student.F_name);   // access first name
console.log(student["F_name"]); // access first name

console.log(student.fun());

student.F_name="TAnmay"        // change the value of object element
student.age++    // age increment by 1 
console.log(student.F_name);
console.log(student.age);