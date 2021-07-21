function solve(arr, n){
    for (let i = 0; i < arr.length; i++) {
        for (let m = i + 1; m < arr.length; m++) {
            let sum = arr[i] + arr[m];
            if(sum === n){
                console.log(`${arr[i]} ${arr[m]}`);
                break;
            }
        }
    }
}