function solve(arr) {
  return arr
    .sort((a, b) => a.localeCompare(b))
    .map((product, index) => `${index + 1}.${product}`)
    .join('\n');
}

function solve2(arr) {
  let sorted = arr.sort();
  for (let index = 0; index < sorted.length; index++) {
    console.log(`${index + 1}.${sorted[index]}`);
  }
}
solve2(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
