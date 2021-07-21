function emojiDetector(input) {

    let arr = [];
    let text = input[0]
    let emojiCount = 0;
  
    let regexDigits = /[\d]/g;
    let coolThreshold = text.match(regexDigits).reduce((a, b) => Number(a) * Number(b), 1);
    console.log(`Cool threshold: ${coolThreshold}`)
  
    let regexEmoji = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g
                     
  
    let matchEmoji = regexEmoji.exec(text)
    while (matchEmoji) {
        emojiCount++;
  
      let emoji = matchEmoji.groups.name;
      if (/\w/.exec(emoji)) {
        emoji = emoji.split('').map(el => el.charCodeAt()).reduce((a, b) => a + b, 0)
        if (emoji > coolThreshold) {
          arr.push(matchEmoji[0])
        }
      }
        matchEmoji = regexEmoji.exec(text)
    }
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`)
    arr.forEach(el => {
        console.log(`${el}`)
    })
  }
emojiDetector(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'])