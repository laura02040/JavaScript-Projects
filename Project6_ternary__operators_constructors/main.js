function Ride_Function() { //function using ternary operation with input from browser
    var Height=document.getElementById("Height").value;
    var Can_ride=(Height<52)? "You are too short":"You are tall enought";
    document.getElementById("Ride").innerHTML=Can_ride+"to ride.";
}

function Vehicle(Make, Model, Year, Color) { //constructor function utilizing "new" and "this" keywords
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Behicle_Year=Year;
    this.Vehicle_Color;
}
var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");

function my_Function(){ //function to display the results of the constructor in HTML element
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a "+
    Erik.Vehicle_Color+
    "-colored"+
    Erik.Vehicle_Model+
    "manufactured in"+
    Erik.Vehicle_Year;
}

function add_Strings() { //nested function
    var start_string="Hello";
    function Adding(str) {
        start_string=start_string+""+str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML=start_string;
}