function solve(num){
    num = Number(num);
    let factorial = 1;
    for(let i = 2; i <= num; i++){
        factorial *= i;
        
    }
    console.log(factorial);
}
solve("4"); 