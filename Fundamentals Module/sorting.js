function solve(input) {
  input.sort((a, b) => a - b);
  let result = [];
  while (input.length !== 0) {
    result.push(input[input.length - 1]) && input.pop();
    result.push(input[0]) && input.shift();
  }
  console.log(result.join(' '));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
