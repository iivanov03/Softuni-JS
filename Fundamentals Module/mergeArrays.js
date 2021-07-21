function solve(firstArr, secondArr){
    let thirdArr = [];
    for (let index = 0; index < firstArr.length; index++) {
        if(index % 2 === 0){
            let sum = Number(firstArr[index]) + Number(secondArr[index]);
            thirdArr.push(sum);
        } else{
            let concat = firstArr[index] + secondArr[index];
            thirdArr.push(concat);
        }
    }
    console.log(thirdArr.join(' - '));
}