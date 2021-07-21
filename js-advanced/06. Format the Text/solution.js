function solve() {
  let textArea = document.getElementById('input');

  let text = textArea.value;

  let sentences = text.split('.').filter(x => x !== '').map(x => x + '.');

  let paragraphsRoof = Math.ceil(sentences.length / 3);
  //let paragraphs = [];
  let resultDiv = document.getElementById('output');
  for (let index = 0; index < paragraphsRoof.length; index++) {
    //let paragraphIndex = Math.trunc(index / 3);
    //paragraphs[paragraphIndex] = paragraphs[paragraphIndex] === undefined 
    //? sentences[index]
    //: paragraphs[paragraphIndex] 
    resultDiv.innerHTML += `<p>${sentences.splice(3).join('')}</p>`
    }
}