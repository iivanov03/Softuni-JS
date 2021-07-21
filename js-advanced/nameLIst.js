function solve(arr){
    arr.sort((a, b) => a.localeCompare(b)).forEach((n, i) => console.log(`${i + 1}.${n}`));
}
solve(["John", "Bob", "Christina", "Ema"]);