// //PART ONE: FIZZ BUZZ
let num = 100;

//For Loop for loop through all 100 numbers and then check if they are visible by 3 and 5 using if statements.
for(let i = 1; i <= num; i++){
    
    if( i % 3 ===0){  
        console.log("Fizz")

    }
    else if( i % 5 === 0){
        console.log("Buzz")

    }
    else if( i % 3 && i % 5 ===0) {
        console.log("Fizz Buzz")

    }
    else{
        console.log(i)}
        
}

function checkPrime(start){

    let i = 2;

    while(i < start){
    //check is number is Prime
            if(start%i ===0) return false;
            i++;
        }
        return true;
    }  

//PART TWO: PRIME TIME
function findNextPrimerNumber(startNum){
    let starting = startNum + 1;

    while(starting){
        if(checkPrime(starting)){
            break;
        }
        starting++;
    }
    return starting;
}
console.log(findNextPrimerNumber(100))

//     let isPrime = true;
//     //Use math sqrt to get the maximum possible divisor for the nextNumber
//     let counter = Math.sqrt(nextNumb);

//         while(true){
//             isPrime = true;
//             //Check if the number is divible by any number between 2 and its possible divisor
//             for(let i=2; i<= counter; i++){
//                 if(nextNumb%i===0){
//                     isPrime = false;
//                     break;
//                 }
//             }

//             //If the number is primer, will break the while loop
//             if(isPrime){
//                 break;
//             }
//             nextNumb++;
//         }

//    console.log(`The following prime number is ${nextNumb}`)
// }

//Call IsPrime function
// isPrime(5)
// isPrime(9)



//PART THREE: FEELING LOOPY
const string = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let rows = string.split("\n") //Retuns four arrays of elements 

    for( j = 0; j< rows.length; j++){
     
        let cells = rows[j].split(",");
        
       console.log(cells.join(" "));
   }



