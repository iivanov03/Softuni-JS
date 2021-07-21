function readArray(arr) {
    let index = 0;
    while(true) {
        if (arr[index] == "Stop") {
            break;
        } else {
            console.log(arr[index]);
            index++;
        }
    }
}
 
function guessPassword(input) {
    let username = input[0];
    let password = input[1];
    let data;
    let index = 2;
    while (data !== password) {
        data = input[index];
        index++;
        console.log(data);
    }
 
    console.log(`Welcome ${username}`);
}
 
function sumOfElements(arr) {
    let index = 1;
    let sum = 0;
    while (arr[0] > sum) {
        sum += arr[index];
        console.log(arr[index]);
        index++;
    }
    console.log(sum);
}
 
 
 
function numbers(n) {
    n = Number(n);
    let k = 1;
    while (k <= n) {
        console.log(k);
        k = 2 * k + 1;
    }
}
 
 
function bankBalance(arr) {
    let sum = 0;
    let index = 0;
    while (arr[index] != "NoMoreMoney") {
        arr[index] = Number(arr[index]);
        if (arr[index] > 0 ) {
            sum += arr[index];
            console.log(`Increase: ${arr[index]}`);
        } else {
            console.log("Invalid operation!");
        }
        index++;
    }
 
    console.log(`Total: ${sum}`);
}
 
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
 
function biggestNumberFor(arr) {
    let biggest = Number(arr[0]);
    for (let i = 1; i< arr.length; i++) {
        if (arr[i] == "Stop") {
            break;
        }
        let currentNum = Number(arr[i]);
        if (biggest < currentNum) {
            biggest = currentNum;
        }
    }
    console.log(biggest);
}
 
 
function smallestNumber(arr) {
    let smallest = Number(arr[0]);
    let index = 1;
    while(arr[index] != "Stop") {
        arr[index] = Number(arr[index]);
        if (smallest > arr[index]) {
            smallest = arr[index];
        }
        index++;
    }
    console.log(smallest);
}
 
 
function graduation(arr) {
    let name = arr[0];
    let i = 1;
    let average = 0;
    let repeat = 0;
    let sum = 0;
    let grade = 0;
    while (i < arr.length) {
        arr[i] = Number(arr[i]);
        
        if (arr[i] < 4) {
            i++;
            repeat +=1;
            if (repeat == 2) {
                break;
            }
            continue;
        }
        grade++;
        sum += arr[i];
        i++;
    }
    if (repeat < 2) {
        average = sum/grade;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${grade+1}`);
    }
    
}
function solve(arr) {
    let width = Number(arr[0]);
    let depth = Number(arr[1]);
    let height = Number(arr[2]);
    let space = width*depth*height;
 
    let index = 3;
    while (arr[index] != "Done" && index < arr.length) {
        arr[index] = Number(arr[index]);
        space-= arr[index];
        index++;
    }
    if (space < 0) {
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
    } else {
        console.log(`${space} Cubic meters left.`);
    }
}
solve(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])