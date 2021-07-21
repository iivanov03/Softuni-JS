function solve(input) {
  return input
    .filter((num, i) => i % 2 === 1)
    .map((x) => 2 * x)
    .reverse()
    .join(' ');
}
solve([10, 15, 20, 25]);
