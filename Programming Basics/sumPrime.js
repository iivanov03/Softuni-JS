function solve(input){
    let index = 0;
    let primeNum = 0;
    let notPrimeNum = 0;
    let primeSum = 0;
    let notPrimeSum = 0;
    let currNum = input[index++];
    while(currNum !== "stop"){
        currNum = Number(currNum);
        let isPrime = true;

        if(currNum < 0){
            console.log(`Number is negative.`);
            currNum = input[index++];
            continue;
        }
        for(let i = 2; i < currNum; i++){
            if(currNum % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeSum += currNum;
        }else{
            notPrimeNum += currNum;
        }
        currNum = input[index++];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeNum}`);
}
solve(["3",
"9",
"0",
"7",
"19",
"4",
"stop"]);