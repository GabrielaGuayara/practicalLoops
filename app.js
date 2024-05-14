//PART ONE: FIZZ BUZZ
let num = 100;
for(let i=1; i<= num; i++){
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


//PART TWO: PRIME TIME
function isPrime(n){

    let nextNumb = n+1;
    let isPrime = true;
    let counter = Math.sqrt(nextNumb);

        while(true){
            isPrime = true;
            for(let i=2; i<= counter; i++){
                if(nextNumb%i===0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                break;
            }
            nextNumb++;
        }

   console.log(`The following prime number is ${nextNumb}`)
}

isPrime(5)
isPrime(9)



//PART THREE: FEELING LOOPY
const data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let rows = data.split("\n")

for(j=0; j< rows.length; j++){
    let cells = rows[j].split(",");
    console.log(cells.join(" "));
   }

