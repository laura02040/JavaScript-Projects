var x=true; //variable with Bolean data type

document.write(typeof x);  //printing the data type of the variable
document.write("<br>");

document.write("10"+5);  //expression combining a string and number 
document.write("<br>");

document.write(10==10);  //utilizing the ==operator
document.write("<br>");


x=1;
y=1;
document.write(x===y);
document.write("<br>");

document.write(5>2 && 10>4);   //utilizing > and && operators
document.write("<br>");

document.write(10<5 || 11<6);  // utilizing < and || operators
document.write("<br>");




function not_Function() {
    document.getElementById("Not").innerHTML=!(1>2)
}
