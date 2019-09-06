var firstName = 'john';
var civilStatus = 'single';
var age = 16;


//age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice. ');

var job  = 'teacher';

switch(job)
       {
               case'teacher':
               console.log(' teaches kids how to code.');
               break;
                case'driver':
               console.log(' drives uber');
               break;
                case'teacher':
               console.log(' design beautifull websites.');
               break;
               
           default:
               console.log('job is not in the list.');
       
       }

switch(true)
    {
        case age < 13:
            console.log('is a boy');
            break;
            
        case age >= 13 && age < 20:
            console.log('is a teenager');
            break;
        case age >=20 && age < 30:
            console.log('is a young man.');
            break;
        default:
            console.log('age is not in range.');
    }