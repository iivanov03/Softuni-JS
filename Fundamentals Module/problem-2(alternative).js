function problemTwo(input) {
  let friends = input.shift().split(', ');
  let numberOfLost = 0;
  let numberOfBlacklisted = 0;

  for (let i = 0; i < input.length; i++) {
    let [command, first, second] = input[i].split(' ');

    if (command === 'Blacklist') {
      if (friends.includes(first)) {
        let index = friends.indexOf(first);
        console.log(`${first} was blacklisted.`);
        for (let j = 0; j < friends.length; j++) {
          if (friends[j] === first) {
            friends.splice(index, 1, 'Blacklisted');
          }
        }
        numberOfBlacklisted++;
      } else {
        console.log(`${first} was not found`);
      }
    } else if (
      command === 'Error' &&
      friends[first] !== 'Blacklisted' &&
      friends[first] !== 'Lost'
    ) {
      console.log(`${friends[first]} was lost due to an error.`);
      friends[first] = 'Lost';
      numberOfLost++;
    } else if (command === 'Change') {
      first = Number(first);
      if (first >= 0 && first < friends.length) {
        console.log(`${friends[first]} changed his username to ${second}. `);
        friends[first] = second;
      }
    } else if (command === 'Report') {
      break;
    }
  }

  console.log(`Blacklisted names: ${numberOfBlacklisted} `);
  console.log(`Lost names: ${numberOfLost} `);
  console.log(friends.join(' '));
}

problemTwo([
  'Mike, John, Eddie',
  'Blacklist Mike',
  'Error 0',
  'Error 1',
  'Change 2 Mike123',
  'Report',
]);
