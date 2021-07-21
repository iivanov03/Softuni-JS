function thePianists(arr) {
    arr.pop()
    let numbersMelody = arr.shift()
    let musicObj = {}
  
    while (numbersMelody--) {
      const [piece, compositor, key] = arr.shift().split('|')
      musicObj[piece] = {compositor, key}
    }
  
    for (const row of arr) {
      const [command, piece, arg1, arg2] = row.split('|')
  
      if (command == 'Add') {
        let [compositor, key] = [arg1, arg2]
        if (musicObj.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`)
        } else {
          musicObj[piece] = {compositor, key}
          console.log(`${piece} by ${compositor} in ${key} added to the collection!`)
        }
      }
  
      if (command == 'Remove') {
        if (musicObj.hasOwnProperty(piece)) {
          delete musicObj[piece]
          console.log(`Successfully removed ${piece}!`)
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
      }
  
      if (command == 'ChangeKey') {
        let key = arg1
        if (musicObj.hasOwnProperty(piece)) {
          musicObj[piece].key = key
          console.log(`Changed the key of ${piece} to ${key}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
      }
    }
  
    sortObj = Object.entries(musicObj).sort((a, b) => a[0].localeCompare(b[0] ||
      a[1].compositor.localeCompare(b[1].compositor)))  
    
    for (const song of sortObj) 
      console.log(`${song[0]} -> Composer: ${song[1].compositor}, Key: ${song[1].key}`)
  }
  thePianists([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  );