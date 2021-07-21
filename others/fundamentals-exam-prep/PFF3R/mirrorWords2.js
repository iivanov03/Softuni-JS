function mirrorWord(text) {
    const regex = /#{1}[A-z]{3,}\#{2}[A-z]{3,}\#{1}|\@{1}[A-z]{3,}\@{2}[A-z]{3,}\@{1}/gm
    let pairsArr = []
    let resultArr = text[0].match(regex)
  
    if (resultArr != null)
        console.log(`${resultArr.length} word pairs found!`);
    else
        console.log(`No word pairs found!\nNo mirror words!`);
  
    for (let pairs of resultArr) {
      let filterPairs = [...pairs].filter(el => el.toLowerCase() != el.toUpperCase())
      let firstHalf = filterPairs.splice(0, Math.floor(filterPairs.length / 2)).join('')
      let secondHalf = filterPairs.reverse().join('')
  
      if (firstHalf == secondHalf)
        pairsArr.push(`${firstHalf} <=> ${[...secondHalf].reverse().join('')}`)
    }
  
    if (pairsArr.length > 0)
      console.log(`The mirror words are:\n${pairsArr.join(', ')}`)
    else
      console.log('No mirror words!')
  }
  mirrorWord([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )