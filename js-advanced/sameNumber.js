function solve(input) {
    input = String(input);
    let result = true;
    let sum = 0;
    let firstDigit = input[0];
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
        if (input[i] !== firstDigit) {
            result = false;
        }
    }
    console.log(result);
    console.log(sum);
}