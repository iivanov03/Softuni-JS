function solve(input) {
  let wordColl = input.shift().split(' ');

  for (let i = 0; i < input.length; i++) {
    let [command, firstArg, secondArg] = input[i].split(' ');

    if (command == 'Delete') {
      if (firstArg >= 0 && firstArg < wordColl.length) {
        let index = Number(firstArg) + 1;
        wordColl.splice(index, 1);
      }
    } else if (command == 'Swap') {
      let indexOne = wordColl.indexOf(firstArg);
      let indexTwo = wordColl.indexOf(secondArg);

      if (indexOne !== -1 && indexTwo !== -1) {
        wordColl[indexOne] = secondArg;
        wordColl[indexTwo] = firstArg;
      }
    } else if (command == 'Put') {
      secondArg--;
      if (secondArg >= 0 && secondArg <= wordColl.length) {
        wordColl.splice(secondArg, 0, firstArg);
      }
    } else if (command == 'Sort') {
      wordColl.sort((a, b) => b.localeCompare(a));
    } else if (command == 'Replace') {
      let index = wordColl.indexOf(secondArg);
      if (index >= 0 && index < wordColl.length) {
        wordColl[index] = firstArg;
      }
    } else if (command == 'Stop') {
      break;
    }
  }
  console.log(wordColl.join(' '));
}
solve([
  'Congratulations! You last also through the have challenge!',
  'Swap have last',
  'Replace made have',
  'Delete 2',
  'Put it 4',
  'Stop',
]);
solve([
  'This the my quest! final',
  'Put is 2',
  'Swap final quest!',
  'Delete 2',
  'Stop',
]);
solve([
  'aa bb cc dd ee ff',
  'Put pp 3',
  'Put q 0',
  'Put w 8',
  'Put ww 8',
  'Stop',
]);
