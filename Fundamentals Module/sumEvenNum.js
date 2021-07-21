function solve(num){
    for (let index = 0; index < num.length; index++) {
        num[index] = Number(num[index]);
    }

    let sum = 0;

    for (let curr of num) {
        if(curr % 2 === 0){
            sum += curr;
        }
    }
    console.log(sum);
}
solve(['1', '2', '3', '4', '5', '6'])