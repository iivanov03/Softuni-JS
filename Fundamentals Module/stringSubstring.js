function stringAndSubstring(word, sentence) {
  sentence = sentence.toLowerCase().split(' ');
  if (sentence.includes(word)) {
    return word;
  }
  return `${word} not found!`;
}
console.log(
  stringAndSubstring(
    'javascript',
    'JavaScript is the best programming language'
  )
);
