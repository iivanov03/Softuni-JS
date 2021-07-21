function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let [name] = arr[i].split(' ');
    if (result.includes(name) && !arr[i].includes('not')) {
      console.log(`${name} is already in the list!`);
    }
    if (!result.includes(name) && !arr[i].includes('not')) {
      result.push(name);
    }
    if (!result.includes(name) && arr[i].includes('not')) {
      console.log(`${name} is not in the list!`);
    }

    if (result.includes(name) && arr[i].includes('not')) {
      let index = result.indexOf(name);
      result.splice(index, 1);
    }
  }
  console.log(result.join('\n'));
}
solve([
  'Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!',
]);
