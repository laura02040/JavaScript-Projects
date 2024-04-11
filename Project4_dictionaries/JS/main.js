function my_Dictionary() {
    var car= {
        title:"BMW",
        Age:2010,
        condition:"Used",
    };
    delete car.Age; //removes age from dictionary
    document.getElementById("Dictionary").innerHTML=car.Age;
}
