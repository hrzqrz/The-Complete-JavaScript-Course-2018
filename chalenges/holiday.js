// solution 1 ( my solution )

var paidsAmounts = [124, 48, 268];

function calculateTip(paid){
    paid = paidsAmounts;
    //console.log(paid);
    var paid20, totalFor20;
    var paid15, totalFor15;
    var paid10, totalFor10;
    var allTips = new Array();
     var finalPaids = new Array();
    
    for(var i = 0; i <= paid.length ; i++ ){
        if(paid[i] <= 50 ){
            paid20 = ( paid[i] * 20 ) / 100;
            totalFor20 = paid20 + paid[i];
            allTips.push(paid20);
            finalPaids.push(totalFor20);
        }else if(paid[i] > 50 && paid[i] <= 200 ){
            paid15 = ( paid[i] * 15 ) / 100;
            totalFor15 = paid15 + paid[i];
            allTips.push(paid15);
            finalPaids.push(totalFor15);
        }else if(paid[i] >= 200){
            paid10 = ( paid[i] * 10 ) / 100;
            totalFor10 = paid10 + paid[i];
            allTips.push(paid10);
            finalPaids.push(totalFor10);
                 }else{
                     console.log("your amount is not in the range");
                 }
        
        //console.log(allTips);
        //console.log(finalPaids);
    }
}

//calculateTip(paidsAmounts);

// solution 2 

function tipCalculator(bill){
    var percentage; 
    if( bill < 50 ){
        percentage = 0.2;
    }else if( bill >=50 && bill<200){
        percentage = 0.15
    }else{
        percentage = 0.1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finallValues = [ bills[0] + tips[0],
                     bills[1] + tips[1],
                     bills[2] + tips[2]];
console.log(tips);
console.log(finallValues)