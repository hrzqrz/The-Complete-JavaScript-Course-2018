var john = {
    firstName:'john',
    mass:90,
    height:1.69,
    bmiCala: function(){
                    this.bmi = this.mass / ( this.height * this.height );
                    return this.bmi;
                }
}

var mark = {
    firstName:'mark',
    mass:68,
    height:1.50,
    bmiCalc: function(){
        this.bmi = this.mass / ( this.height * this.height);
        return this.bmi;
    }
}

if(john.bmiCala() > mark.bmiCalc()){
    console.log('John\'s bmi is greater then mark\s bmi. :' + john.bmi);
}else{
    console.log('mark\'s bmi is greater than john\'s bmi. :' + mark.bmi);
}