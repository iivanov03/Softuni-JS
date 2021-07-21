function solve(input) {
  let obj = {};
  input
    .shift()
    .split(' ')
    .forEach((word) => {
      obj[word] = 0;
    });
  input.forEach((word) => {
    if (obj.hasOwnProperty(word)) {
      obj[word]++;
    }
  });
  return Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .map((word) => `${word} - ${obj[word]}`)
    .join('\n');
}
console.log(
  solve([
    'this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurances',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task',
  ])
);
