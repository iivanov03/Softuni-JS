 function solve(arr) {
    let sum = 0;
    let index = 0;
    while (arr[index] != "NoMoreMoney") {
        arr[index] = Number(arr[index]);
        if (arr[index] > 0 ) {
            sum += arr[index];
            console.log(`Increase: ${arr[index].toFixed(2)}`);
        } else {
            console.log("Invalid operation!");
        }
        index++;
    }
 
    console.log(`Total: ${sum}`);
}
// solve(["5.51", "69.42", "100", "NoMoreMoney"])
function balance(input){
    let deposit = input[0];
    let balance = 0;
    let index = 1;
    while (deposit !== "NoMoreMoney"){
        let amount = Number(deposit);
        if(amount < 0){
            console.log("Invalid operation!");
        }
            balance += amount;
            console.log(`Increase: ${amount.toFixed(2)}`);
            deposit = input[index];
            index++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
balance(["5.51", "69.42", "100", "NoMoreMoney"])