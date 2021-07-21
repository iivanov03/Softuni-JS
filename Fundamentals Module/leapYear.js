function solve(num){
    // if(num % 4 === 0 && num % 100 !== 0 || num % 400 === 0){
    //     console.log('yes')
    // }else {
    //     console.log('no')
    // }
    let isLeap = num % 4 === 0 && num % 100 !== 0 || num % 400 === 0;
    let result = isLeap ? 'yes' : 'no';
    console.log(result)
}
solve()