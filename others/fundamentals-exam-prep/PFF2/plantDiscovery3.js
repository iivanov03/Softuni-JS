//function plantDiscovery(arr) {
//    arr.pop()
//    let numberOfPlant = arr.shift()
//    let plantObj = {}

//    while (numberOfPlant--) {
//      const [plan, rarity] = arr.shift().split('<->')
//      plantObj[plan] = {rarity, 'rating':[]}  
//    }

//    while (arr.length > 0) {
//      const [command, plan, points] = arr.shift().match(/[^:\s-]+/g)
//      if (!plantObj.hasOwnProperty(plan)) {
//        console.log('error')
//        continue
//      }     
//      command == 'Rate' ? plantObj[plan].rating.push(+points) : command == 'Reset' ? plantObj[plan].rating = [] : plantObj[plan].rarity = points
//    }

//    for (const [key, val] of Object.entries(plantObj)) {
//      let getLength = val.rating.length
//      try {
//        plantObj[key].rating = val.rating.reduce((a, b) => a + b) / getLength
//      } catch {
//        plantObj[key].rating = 0
//      }
//    }

//    let sortObj = Object.entries(plantObj).sort((a, b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating)
//    console.log('Plants for the exhibition:')
//    for (const key of sortObj)
//      console.log(`- ${key[0]}; Rarity: ${key[1].rarity}; Rating: ${key[1].rating.toFixed(2)}`)  
//  }

//plantDiscovery([
//  '2',
//  'Candelabra<->10',
//  'Oahu<->10',
//  'Rate: Oahu - 7',
//  'Rate: Candelabra - 6',
//  'Exhibition',
//])

function plantDiscovery(arr) {
    arr.pop()
    let n = Number(arr.shift())
    let discovery = {}
    

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = arr.shift().split('<->')
        rarity = Number(rarity)

        discovery[plant] = {
            rarity: rarity,
            avgCount: 0,
            sum: 0,
            start: rarity
        }
    }


    for (let line of arr) {
        let [command, ...args] = line.split(': ')

        if (command == 'Rate') {
            let [plant, rating] = args[0].split(' - ')
            rating = Number(rating)
            if (discovery.hasOwnProperty(plant)) {
                let plantInfo = discovery[plant]
                plantInfo.avgCount += 1
                plantInfo.sum += rating
            } else {
                console.log(`error`);
            }
        } else if (command == 'Update') {
            let [plant, newRarity] = args[0].split(' - ')
            newRarity = Number(newRarity)
            if (discovery.hasOwnProperty(plant)) {
                let plantInfo = discovery[plant]
                plantInfo.rarity = newRarity
            } else {
                console.log(`error`);
            }
        } else if (command == 'Reset') {
            let plant = args
            if (discovery.hasOwnProperty(plant)) {
                let plantInfo = discovery[plant]
                plantInfo.rarity = plantInfo.start
                plantInfo.sum = 0
            } else {
                console.log(`error`);
            }
        }
    }

    let sorted = Object.entries(discovery).sort((a, b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating );

    console.log(`Plants for the exhibition:`);
    for (let el of sorted) {
        if (el[1].sum === 0) {
            averageRating = 0;
        } else {
            averageRating = el[1].sum / el[1].avgCount
        }
        console.log(`- ${el[0]}; Rarity: ${el[1].rarity}; Rating: ${averageRating.toFixed(2)}`)
    };
}
plantDiscovery([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition',
  ])