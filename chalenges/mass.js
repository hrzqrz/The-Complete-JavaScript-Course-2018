var johnmass = 52;
var johmheight = 152;

var smithMass = 45;
var smithHeight = 150;

var johnBmi = johnmass / (johmheight * johmheight);
var smithBmi = smithMass / (smithHeight * smithHeight );

var isJohnBmiHigher;

if(johnBmi > smithBmi )
    {
        isJohnBmiHigher = true;
        console.log(" is john bmi higher than smith? " + isJohnBmiHigher);
    }else{
        console.log("no");
    }