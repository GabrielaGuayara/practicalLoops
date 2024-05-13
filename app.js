//PART ONE: FIZZ BUZZ
// let num = 100;
// for(let i=1; i<= num; i++){
//     if((i%3)===0){
//         console.log("Fizz")
//     }
//     else if((i%5)===0){
//         console.log("Buzz")
//     }
//     else if((i%3)&&(i%5)===0){
//         console.log("Fizz Buzz")
//     }
//     else{
//         console.log(i)}
// }


//PART TWO: PRIME TIME
// function isPrime(n){

//     let nextNumb = n+1;
//     let isPrime = true;
//     let counter = 10;

//         while(true){
//             isPrime = true;
//             for(let i=2; i<= counter; i++){
//                 if(nextNumb%i===0){
//                     isPrime = false;
//                     break;
//                 }
//             }
//             if(isPrime){
//                 break;
//             }
//             nextNumb++;
//         }

//    console.log(`The following prime number is ${nextNumb}`)
// }

// isPrime(5)
// isPrime(9)
//PART THREE: FEELING LOOPY
const data = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
let row = data.split("\r\n")
let cell="";

for(j=0; j< row.length; j++){
   console.log(row[j]);
   cell= row[j].split(",");
    console.log(cell.join(" "));
   }



