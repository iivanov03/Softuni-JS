function solve(num){
    let k = num.shift();
    let firstK = num.slice(0, k);
    let lastK = num.slice(-k);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

function solveTwo(num){
    let output = [];

    for (const n of num) {
        if (n < 0){
            output.unshift(n);
        }else {
            output.push(n);
        }
    }
    console.log(output.join('\n'));
}
solveTwo([7, -2, 8, 9])