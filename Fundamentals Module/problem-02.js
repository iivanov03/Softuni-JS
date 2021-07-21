function solve(input) {
  let friends = input.shift().split(',');
  let blacklistedNames = 0;
  let lostedNames = 0;
  for (let i = 0; i < input.length; i++) {
    let [command, first, second] = input[i].split(' ');

    if (command === 'Report') {
      break;
    }
    if (command === 'Blacklist') {
      if (friends.includes(first)) {
        let index = friends.indexOf(first);
        console.log(`${first} was blacklisted.`);
        for (let j = 0; j < friends.length; j++) {
          if (friends[j] === first) {
            friends.splice(index, 1, 'Blacklisted');
          }
        }
        blacklistedNames++;
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
      lostedNames++;
    } else if (command === 'Change') {
      first = Number(first);
      if (first >= 0 && first < friends.length) {
        console.log(`${friends[first]} changed his username to ${second}. `);
        friends[first] = second;
      }
    }
  }
  console.log(`Blacklisted names ${blacklistedNames}`);
  console.log(`Lost names ${lostedNames}`);
  console.log(friends.join(' '));
}
solve([
  'Mike, John, Eddie, William',
  'Error 3',
  'Error 3',
  'Change 0 Mike123',
  'Blacklist Eddie',
  'Report',
]);
