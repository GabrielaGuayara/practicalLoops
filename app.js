//PART ONE: FIZZ BUZZ
let n = 100;
for(let i=1; i<= n; i++){
    if((i%3)===0){
        console.log("Fizz")
    }
    else if((i%5)===0){
        console.log("Buzz")
    }
    else if((i%3)&&(i%5)===0){
        console.log("Fizz Buzz")
    }
    else{
        console.log(i)}
}
