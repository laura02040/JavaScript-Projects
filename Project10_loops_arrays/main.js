//a function using a while loop
function count_To_Ten() {
    var Digit="";
    var x=1;
    while (x < 11) {
        Digit +="<br>"+x;
        x++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}
//A function using a for loop
var Instruments=[
    "Guitar",
    "Drums",
    "Piano",
    "Bass",
    "Violin",
    "Trumpet",
    "Flute",
];
var content="";
var y;
function for_loop() {
    for(y=0; y < Instruments.length; y++) {
        content +=Instruments[y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}
//A function with an array
function color_array() {
    var Colors=[];
    Colors[1]="Green";
    Colors[2]="Red";
    Colors[3]="Blue";
    Colors[4]="Yellow";
    Colors[5]="Orange";
    Colors[6]="Purple";
    document.getElementById("Array").innerHTML =
    "My favorite color is " +Colors[6] +".";
}
//creating an object with the let keyword
function car() {
    let car={
        make: "Nissan",
        year:"2023",
        color:"Black",
    };
    document.getElementById("Car").innerHTML =
    "I have a"+ car.year+""+car.color+""+car.make+".";
}