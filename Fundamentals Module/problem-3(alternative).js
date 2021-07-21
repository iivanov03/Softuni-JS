function problemThree(input) {
  let cards = input.shift().split(':');
  let newCards = [];

  for (let i = 0; i < input.length; i++) {
    let [command, name, index] = input[i].split(' ');

    if (command === 'Add') {
      if (cards.includes(name)) {
        newCards.push(name);
      } else {
        console.log('Card not found.');
      }
    } else if (command === 'Insert') {
      if (cards.includes(name) && index >= 0 && index < newCards.length) {
        newCards.splice(index, 0, name);
      } else {
        console.log('Error!');
      }
    } else if (command === 'Remove') {
      if (newCards.includes(name)) {
        let cardNameIndex = newCards.indexOf(name);
        newCards.splice(cardNameIndex, 1);
      } else {
        console.log('Card not found.');
      }
    } else if (command === 'Swap') {
      let cardNameOneIndex = newCards.indexOf(name);
      let cardNameTwoIndex = newCards.indexOf(index);

      let temp = newCards[cardNameOneIndex];

      newCards.splice(cardNameOneIndex, 1, index);
      newCards.splice(cardNameTwoIndex, 1, temp);
    } else if (command === 'Shuffle') {
      newCards.reverse();
    }
  }
  console.log(newCards.join(' '));
}

problemThree([
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
