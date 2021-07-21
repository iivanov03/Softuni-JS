function solve(arr, n){
    for (let index = 0; index < n; index++) {
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(' '));
}