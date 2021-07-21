function gifts(input) {
  let operator = input.slice(1, input.indexOf('No Money')).join(' ');
  let operatorArr = operator.toString();

  let words = operatorArr.split(' ');

  let inputWords = input.join(' ');
  let inputArr = inputWords.split(' ');

  let giftList = input[0];
  let giftlistArr = giftList.toString().split(' ');

  let ofs = words.indexOf('OutOfStock');

  let compOfs = words.slice(ofs, ofs + 2);

  let i = 0;
  for (let l = 0; l <= inputArr.length; l++) {
    for (let j = 0; j <= giftlistArr.length; j++) {
      requiredIndex = words.indexOf('Required' + 2);
      if (words[i] === 'OutOfStock') {
        if (giftlistArr[j] === compOfs[1]) {
          giftlistArr.splice(j, 1);
          giftlistArr.splice(j, 0, 'None');
        }
      } else if (words[i] === 'Required') {
        let requiredIndex = words[i + 2];
        let swapWord = words[i + 1];
        giftlistArr.splice(requiredIndex, 1, swapWord);
        break;
      } else if (words[i] === 'JustInCase') {
        giftlistArr.pop();
        let swapWord1 = words[i + 1];
        giftlistArr.push(swapWord1);
        break;
      } else {
        break;
      }
    }
    i++;
  }

  for (let k = 0; k <= giftlistArr.length; k++) {
    if (giftlistArr[k] === 'None') {
      let iOfNone = giftlistArr.indexOf('None');
      giftlistArr.splice(iOfNone, 1);
    }
  }

  console.log(giftlistArr.join(' '));
}
gifts([
  'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
  'OutOfStock Eggs',
  'Required Spoon 2',
  'JustInCase ChocolateEgg',
  'No Money',
]);

gifts([
  'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
  'Required Paper 8',
  'OutOfStock Clothes',
  'Required Chocolate 2',
  'JustInCase Hat',
  'OutOfStock Cable',
  'No Money',
]);

function easterGiftss(input) {
  let plannedGifts = input.shift().split(' ');

  for (let i = 0; i < input.length; i++) {
    let currentNote = input[i].split(' ');
    let command = currentNote[0];

    switch (command) {
      case 'OutOfStock':
        let selectedGift = currentNote[1];
        if (plannedGifts.includes(selectedGift)) {
          for (let j = 0; j < plannedGifts.length; j++) {
            plannedGifts[plannedGifts.indexOf(selectedGift)] = 'None';
          }
        }
        break;
      case 'Required':
        let requiredGift = currentNote[1];
        let requiredIndex = +currentNote[2];
        if (requiredIndex >= 0 && requiredIndex <= plannedGifts.length) {
          plannedGifts[requiredIndex] = requiredGift;
        }
        break;
      case 'JustInCase':
        let inCaseGift = currentNote[1];
        plannedGifts.pop();
        plannedGifts.push(inCaseGift);
        break;
      case 'No money':
        break;
    }
  }
  plannedGifts = plannedGifts.filter((val) => val !== 'None');

  console.log(plannedGifts.join(' '));
}
