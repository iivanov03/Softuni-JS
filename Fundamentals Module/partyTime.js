function solve(input) {
  let list = {
    vip: [],
    regular: [],
  };
  let name = input.shift();
  while (name !== 'PARTY') {
    let char = name[0];
    if (isNaN(char)) {
      list.regular.push(name);
    } else {
      list.vip.push(name);
    }
    name = input.shift();
  }

  input.forEach((guest) => {
    if (list.vip.includes(guest)) {
      let index = list.vip.indexOf(guest);
      list.vip.splice(index, 1);
    } else if (list.regular.includes(guest)) {
      let index = list.regular.indexOf(guest);
      list.regular.splice(index, 1);
    }
  });

  console.log(list.vip.length + list.regular.length);
  console.log(`${list.vip.join('\n')}\n${list.regular.join('\n')}`);
}
solve([
  '7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
]);
