var x=10; //global variable
function Add_numbers_1() {
    var x=99; //local variable
    document.write(10+x+"<br>");
}
function Add_numbers_2() {
    document.write(x+11);
    console.log(x) //using console.log to debug 
}
Add_numbers_1();
Add_numbers_2();
function get_Date() {   //function that includes an if statement
if(new Date().getHours()<18) {
    document.getElementById("Greeting").innerHTML="It is currently before 6p.m";
}
}
function get_Reply() {
    var user_input=document.getElementById("userInput").value;
    if(user_input % 2===0) {
        reply="you entered an even number!";
        document.getElementById("feedback").innerHTML=reply;
    }
    else {
        reply="you entered odd number!";
        document.getElementById("feedback").innerHTML=replay;
    }
}
function Time_function() {  //utilizing the time_function()
    var Time=new Date().getHours();
    var Reply;
    if (Time <12 ==Time >0) {
        Reply="It is morning time!";
    } else if (Time>=12== Time <18){
        Reply="It is afternoon!";
    } else {
        Reply="It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}

