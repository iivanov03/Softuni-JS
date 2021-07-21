function solve(num){
    num = Number(num);
    for (i = 1; i <= 10; i++){
        let prod = num * i;
        console.log(`${i} * ${num} = ${prod}`);
    }
}
solve("2");