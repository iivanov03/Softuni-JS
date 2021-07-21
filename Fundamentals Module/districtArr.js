function solve(arr){
    let dist = [];
    for (const num of arr) {
        if(!dist.includes(n)){
            dist.push(n);
        }
    }
    return dist.join(' ');
}