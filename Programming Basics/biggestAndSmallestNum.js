function biggestNumber(arr) {
    let biggest = Number(arr[0]);
    let index = 1;
    while(arr[index] != "Stop") {
        arr[index] = Number(arr[index]);
        if (biggest < arr[index]) {
            biggest = arr[index];
        }
        index++;
    }
    console.log(biggest);
}

function solve(input){
    let smallNum = Number(input[0]);
    let index = 1;
    while (input[index] != "Stop"){
        input[index] = Number(input[index]);
        if (smallNum > input[index]){
            smallNum = input[index];
        }
        index++
    }
    console.log(smallNum);
}
solve(["100",
        "99",
        "80",
        "70",
        "Stop"])