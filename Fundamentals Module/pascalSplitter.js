function pascalSplitter(str) {
  let goodStr = str
    // Look for long acronyms and filter out the last letter
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    // Look for lower-case letters followed by upper-case letters
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // Look for lower-case letters followed by numbers
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/^./, function (str) {
      return str.toUpperCase();
    })
    // Remove any white space left around the word
    .trim()
    .split(' ')
    .join(', ');
  console.log(goodStr);
}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

function pascalSplitterSec(str) {
  let result = [];
  let upperIndex = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      let word = str.substring(upperIndex, i);
      result.push(word);
      upperIndex = i;
    }
  }
  result.push(str.substring(upperIndex));
  console.log(result.join(', '));
}
pascalSplitterSec('SplitMeIfYouCanHaHaYouCantOrYouCan');
