function solve(num){
    let str = num.toString();
    let sum = 0;
    for (let index = 0; index < str.length; index++) {
        sum += Number(sum[index]); 
    }
    console.log(sum)
}
solve(245678)


function solve(n){
    let str = n.toString();
    let sum = 0;

    for (i = 0; i < str.length; i++) { 
        sum += Number(str[i]);
    }
    
    console.log(sum);

}
solve(245678)
