function solve(arr){
    let isEqual = false;
    for(let i = 0; i < arr.length; i++){
        let leftSum = 0;
        let rigthSum = 0;
        for(let m = i + 1; m < arr.length; m++){
            rigthSum += arr[m];
        }

        for (let l = 0; l < i; l++) {
            leftSum += arr[l];
        }

        if(rigthSum == leftSum){
            isEqual = true;
            console.log(i);
        }
    }

    if(!isEqual){
        console.log('no');
    }
}
solve([1, 2, 3, 3])

function solve2(arr){
    let leftSum = 0;
    let rigthSum = 0;
    let isEqual = false;
    for (let i = 0; i < arr.length; i++) {
        for (let m = i + 1; m < arr.length; m++) {
            
        }
    }
}