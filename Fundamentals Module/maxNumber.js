const e = require("express");

function solve(arr){
    let topNum = [];
    for (let index = 0; index < arr.length; index++) {
        let isTop = true;
        for (let m = index + 1; m < arr.length; m++) {
           if(arr[index] <= arr[m]){
            isTop = false;
            break;
           } 
         }
         if (isTop){
            topNum.push(arr[index]);
         }
    }
    console.log(topNum.join(' '));
}
solve([1, 4, 3, 2]);