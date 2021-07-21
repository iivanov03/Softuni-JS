function solve(num){
    let condense = [];

    while (num.length > 1){
        for (let index = 0; index < num.length - 1; index++) {
            let firstNum = num[index];
            let secondNum = num[index + 1];
            condense.push(firstNum + secondNum);
        }
        num = condense;
        condense = [];
    }
    console.log(num[0]);
}
solve([2, 10, 3])