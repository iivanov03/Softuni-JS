function activationKeys(arr) {
    arr.pop()
    let key = arr.shift()
    while (arr.length > 0) {

    let [command, ...token] = arr.shift().split('>>>');

      if (command == 'Slice') {
        let [start, end] = token.map(Number)
        let cutElements = key.slice(start, end)
        key = key.replace(cutElements, '')
        console.log(key)
      }
  
      else if (command == 'Flip') {
        let [action, start, end] = token.map(el => isNaN(el) ? el : Number(el))
        if (action == 'Upper') {
          key = key.slice(0, start) + key.slice(start, end).toUpperCase() + key.slice(end, )
        } else { //Lower
          key = key.slice(0, start) + key.slice(start, end).toLowerCase() + key.slice(end, )
        }
  
        console.log(key)
      }
  
      else if (command == 'Contains') {
        let substr = token.shift()
        if (key.includes(substr)) {
          console.log(`${key} contains ${substr}`)
        } else {
          console.log(`Substring not found!`)
        }
  
      }
    }
  
    console.log(`Your activation key is: ${key}`)
  }
  activationKeys([  'abcdefghijklmnopqrstuvwxyz',
                    'Slice>>>2>>>6',
                    'Flip>>>Upper>>>3>>>14',
                    'Flip>>>Lower>>>5>>>7',
                    'Contains>>>def',
                    'Contains>>>deF',
                    'Generate'
    ])