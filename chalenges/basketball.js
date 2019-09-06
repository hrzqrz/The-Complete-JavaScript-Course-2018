var johnFplay, johnSplay, johnTplay;
var mikeFplay, mikeSplay, mikeTplay;
var maryFplay, marySplay, maryTplay;

johnFplay = 89;
johnSplay = 120;
johnTplay = 103; 

mikeFplay = 116;
mikeSplay = 94;
mikeTplay = 123; 

maryFplay = 97;
marySplay = 134;
maryTplay = 105;

var johnAverage, mikeAverage, maryAverage;

johnAverage = ( johnFplay + johnSplay + johnTplay ) / 3 ;

mikeAverage = ( mikeFplay + mikeSplay + mikeTplay ) / 3 ;

maryAverage = ( maryFplay + marySplay + maryTplay ) / 3 ;

if( johnAverage > mikeAverage )
   {
       console.log('John wins the game and the score is: '+ johnAverage );
   }else{
       console.log('mike wins the game and the score is: '+ mikeAverage );
   }

if( maryAverage > johnAverage && maryAverage > mikeAverage )
    {
        console.log('mary wins the game and the score is: '+ maryAverage );
    } else if( johnAverage > maryAverage && johnAverage > mikeAverage )
        {
            console.log('john wins the game and the score is: '+ maryAverage );
        }else
            {
                console.log('mike wins the game and the score is: '+ mikeAverage );
            }

