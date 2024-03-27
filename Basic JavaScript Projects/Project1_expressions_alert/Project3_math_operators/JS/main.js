function addition() {   //addition function
    var add=2+2 ;
    document.getElementById ("Add").innerHTML="2+2="+ add ;
}
function Substraction () { //substraction function
    var sub=5-2 ;
    document.getElementById("Sub").innerHTML="5-2="+ sub;
}
function multiplication() {  //multiplication function
    var mult=2*2 ;
    document.getElementById ("Mlt").innerHTML="2*2="+ mult ;
}
function division() {   //division function
    var divide=39/3 ;
    document.getElementById ("Div").innerHTML="39/3="+ divide ;
}
function random() {  //random function
    document.getElementById ("Ran").innerHTML=Math.random()*10;
}
function modulus_operator() {  //modulus operator
    var modulus=38 % 4;
    document.getElementById ("Mod").innerHTML= +modulus;
}
function Increment() {  //increment function
    var value= document.getElementById ("incrementText").innerHTML
    value++;
    document.getElementById("IncrementText").innerHTML=value;
}
function Decrement() {  //decrement function
    var value= document.getElementById("DecreamentText").innerHTML;
    value--;
    document.getElementById ("DecrementText").innerHTML=value;
}