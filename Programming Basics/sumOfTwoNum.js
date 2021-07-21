 function solve(input){
     let com = 0;
     let comFound = false;

     for(let i = 0; i < input.length; i++){
         input[i] = Number(input[i]);
     }
     for (let i =input[0]; i <= input[1]; i++){
         for (j = input[0]; j <= input[1]; j++){
             com++; 
             if(i + j == input[2]){
                 console.log(`Combination N:${com} (${i} + ${j} = ${input[2]})`);
                 comFound = true;
                 break;
             }
         }
         if(comFound){
             break;
         }
     }
     if(!comFound){
         console.log(`${com} combinations - neither equals ${input[2]}`);
     }
 }
solve(["1",
"10",
"5"])

function combinations(arr) {
    let combinations = 0;
    let combinationFound = false;
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
 
    for (let i = arr[0]; i <= arr[1]; i++) {
        for (let j = arr[0]; j <= arr[1]; j++) {
            combinations++;
            if (i + j == arr[2]) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${arr[2]})`);
                combinationFound = true;
                break;
            }
        }
        if (combinationFound) {
            break;
        }
    }
    if (!combinationFound) {
        console.log(`${combinations} combinations - neither equals ${arr[2]}`);
    }
}
combinations(["1",
"10",
"5"]);