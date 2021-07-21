function solve(input) {
  let cards = input.shift().split(':');
  let newDeck = [];
  for (let i = 0; i < input.length; i++) {
    let [command, firstArg, secondArg] = input[i].split(' ');

    if (command == 'Add') {
      if (cards.includes(firstArg)) {
        newDeck.push(firstArg);
      } else {
        console.log(`Card not found`);
      }
    } else if (command == 'Insert') {
      if (
        cards.includes(firstArg) &&
        secondArg >= 0 &&
        secondArg < newDeck.length
      ) {
        newDeck.splice(secondArg, 0, firstArg);
      } else {
        console.log(`Error!`);
      }
    } else if (command == 'Remove') {
      if (newDeck.includes(firstArg)) {
        let index = newDeck.indexOf(firstArg);
        newDeck.splice(index, 1);
      } else {
        console.log(`Card not found.`);
      }
    } else if (command == 'Swap') {
      let indexOne = newDeck.indexOf(firstArg);
      let indexTwo = newDeck.indexOf(secondArg);

      let temp = newDeck[indexOne];
      newDeck.splice(indexOne, 1, secondArg);
      newDeck.splice(indexTwo, 1, temp);
    } else if (command == 'Shuffle') {
      newDeck.reverse();
    }
  }
  console.log(newDeck.join(' '));
}
solve([
  'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
  'Add Moonfire',
  'Add Pounce',
  'Add Bite',
  'Add Wrath',
  'Insert Claw 0',
  'Swap Claw Moonfire',
  'Remove Bite',
  'Shuffle deck',
  'Ready',
]);
