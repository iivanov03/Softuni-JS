function raceResilts(input) {
  let racers = {};

  input
    .shift()
    .split(', ')
    .forEach((name) => {
      racers[name] = 0;
    });

  for (let line of input) {
    let regexW = /[A-Za-z]/g;
    let regexD = /[\d]/g;

    let name = line.match(regexW).join('');
    if (racers.hasOwnProperty(name)) {
      let km = line
        .match(regexD)
        .map(Number)
        .reduce((a, b) => a + b, 0);
      racers[name] += km;
    }
  }
  let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
  console.log(`1st place: ${sorted[0]}
2nd place: ${sorted[1]}
3rd place: ${sorted[2]}`);
}
raceResilts([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race',
]);
