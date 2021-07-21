function solve(arr){
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 === 0 ){
            arr[index] += index;
        } else {
            arr[index] -= index;
        }        
    }
    let secondSum = 0;
    for (let num of arr) {
        secondSum += num;
    }
    console.log(arr);
    console.log(sum);
    console.log(secondSum);
    
}
solve([5, 14, 21, 59, 31]);