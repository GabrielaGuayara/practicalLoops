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
let n=5
let counter = 10;
if(n>1){
    for(let i=n; i<= counter; i++){
        n++;
        if(!(n%i===0)){
            console.log(i)
            break;
        }
    }
}

//PART THREE: FEELING LOOPY
const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

for(j=0; j<= data.length; j++){
    let newChar = data[j]

    if(newChar == ","){
        console.log(newChar)
    }
}




