function solve(input) {
  return input
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');
}
