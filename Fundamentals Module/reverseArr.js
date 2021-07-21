function solve(n, numbers){
    let arr =[];
    let reversed = [];

    for(let index = 0; index < n; index++){
        arr.push(numbers[index]);
    }
    for (let index = arr.length - 1; index >= 0; index--) {
        reversed.push(arr[index]);
    }
    console.log(reversed.join(' '));
}
solve(['a', 'b', 'c', 'd', 'e']);