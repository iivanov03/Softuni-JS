function solve(input){
    let n = Number(input[0])
    let index = 1;
    let sum = 0;
    while (n > sum){
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);
}
solve(["100", "10", "20", "30", "45"]);
