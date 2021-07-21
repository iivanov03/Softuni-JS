function revealWords(words, temp) {
  words = words.split(', ');
  for (let i = 0; i < words.length; i++) {
    let firstTemp = '*'.repeat(words[i].length);
    temp = temp.replace(firstTemp, words[i]);
  }
  console.log(temp);
}
revealWords(
  'great',
  'softuni is ***** place for learning new programming languages'
);
