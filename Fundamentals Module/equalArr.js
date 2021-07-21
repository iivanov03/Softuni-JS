function solve(firstArr, secondArr){
    for (let index = 0; index < firstArr.length; index++) {
        firstArr[index] = Number(firstArr[index]);
    }
    for (let index = 0; index < secondArr.length; index++) {
        secondArr[index] = Number(secondArr[index]);
    }
    let arrEqual = true;
    for (let index = 0; index < firstArr.length; index++) {
        if(firstArr[index] !== secondArr[index]){
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            arrEqual = false;
            break;
        }
    }
    // let sum = 0;
    // for (let index = 0; index < firstArr.length; index++){
    //     let curr = firstArr[index]
    //     sum += curr;
    //     if(firstArr[index] === secondArr[index]){
    //         console.log(`Arrays are identical. Sum: ${sum}`);
    //     }
    // }

    if(arrEqual){
        let sum = 0;

        for (let index = 0; index < firstArr.length; index++) {
            sum += firstArr[index];
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['10','20','30'], ['10','20','30']);
solve(['1'], ['10']);