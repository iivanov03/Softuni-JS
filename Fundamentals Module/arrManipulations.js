function solve(input) {
  let arr = input.shift().split(' ');
  for (let line of input) {
    let [command, firstNum, secondNum] = line.split(' ');

    if (command === 'Add') {
      arr.push(firstNum);
    } else if (command === 'Remove') {
      let index = arr.indexOf(firstNum);

      if (index !== -1) {
        arr.splice(index, 1);
      }
    } else if (command === 'RemoveAt') {
      let index = Number(firstNum);

      arr.splice(index, 1);
    } else {
      let index = Number(secondNum);

      arr.splice(index, 0, firstNum);
    }
  }
  return arr.map(Number).join(' ');
}
console.log(
  solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
);
