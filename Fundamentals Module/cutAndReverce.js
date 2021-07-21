function phraseMaker(str) {
  let firstPhrase = str.substring(0, str.length / 2);
  let secondPhrase = str.substring(str.length / 2);

  function reverse(input) {
    return input.split('').reverse().join('');
  }
  console.log(reverse(firstPhrase));
  console.log(reverse(secondPhrase));
}
console.log(phraseMaker('tluciffiDsIsihTgnizamAoSsIsihT'));
