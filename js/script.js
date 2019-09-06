function calculateAge( birthYear ){
    return 2019 - birthYear;
}

var muAge = calculateAge(1983);
//console.log('You are: ' + muAge);

function yearsUntilRetirement( year, firstName ){
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires is ' + retirement + ' years.');
}

//yearsUntilRetirement( 1981, 'safa');

// function declaration 

function whatDoYouDo(job, firstName){
    
}

//function expression

var whatsYourJob = function(job, firstName){
    switch(job){
           case'teacher':
            return firstName + ' Teaches the kids';
            case'driver':
            return firstName + ' drives a cab in lisbon';
            case'designer':
            return firstName + ' design websites';
        default:
            return firstName + ' dose somesthing else';
           }
} 

//console.log(whatsYourJob('teacher', 'safa'));

//object litral
var john = {
    firstName: 'john',
    lastName:'smith',
    birthYear:1990,
    familly:['jane', 'mark', 'bob', 'emily'],
    job:'Teacher',
    isMarried:false,
    calcAge: function(){
        return 2019 - this.birthYear;
    }
};
console.log(john);
console.log(john.familly[0]);
console.log(john.calcAge());

// new objecu syntax
var jane = new Object();

jane.fileName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'smith';


 