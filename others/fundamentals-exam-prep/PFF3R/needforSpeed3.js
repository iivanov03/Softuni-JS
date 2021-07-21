//function needForSpeed(input = []) {
//    let numCars = Number(input.shift());
//    let cars = input.splice(0, numCars);
//    let objCars = {};
//  
//    for (const car of cars) {
//      let [carModel, mileage, fuel] = car.split('|');
//      mileage = Number(mileage);
//      fuel = Number(fuel);
//  
//      if (!objCars.hasOwnProperty(carModel)) {
//        objCars[carModel] = {mileage: mileage, fuel: fuel};
//      }
//    }
//  
//    let betterInput = input.splice(0, input.indexOf('Stop'));
//  
//    for (const line of betterInput) {
//      let [command, carName, value, value2] = line.split(' : ');
//      value = Number(value);
//      value2 = Number(value2);
//  
//      switch (command) {
//        case 'Drive':
//          let distance = value;
//          let fuel = value2;
//  
//          if (fuel > objCars[carName].fuel) {
//            console.log('Not enough fuel to make that ride');
//          } else if (objCars[carName].fuel > fuel) {
//            objCars[carName].fuel -= fuel;
//            objCars[carName].mileage += distance;
//            console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
//  
//            if (objCars[carName].mileage >= 100000) {
//              console.log(`Time to sell the ${carName}!`);
//              delete objCars[carName];
//            }
//          }
//          break;
//  
//        case 'Refuel':
//          let fuelForRefill = value;
//  
//          if (objCars[carName].fuel + fuelForRefill >= 75) {
//            console.log(`${carName} refueled with ${75 - objCars[carName].fuel} liters`);
//            objCars[carName].fuel = 75;
//          } else {
//            objCars[carName].fuel += fuelForRefill;
//            console.log(`${carName} refueled with ${fuelForRefill} liters`);
//          }
//          break;
//  
//        case 'Revert':
//          let KMs = value;
//  
//          if (objCars[carName].mileage - KMs <= 10000) {
//            objCars[carName].mileage = 10000;
//          } else {
//            objCars[carName].mileage -= KMs;
//            console.log(`${carName} mileage decreased by ${KMs} kilometers`);
//          }
//          break;
//      }
//    }
//  
//    function sortByMileage(a, b) {
//      a = a[1].mileage;
//      b = b[1].mileage;
//  
//      let comp = 0;
//  
//      if (b > a) {
//        comp = 1;
//      } else if (b < a) {
//        comp = -1;
//      }
//  
//      return comp;
//    }
//  
//    function sortAlphabetically(a, b) {
//      a = a[0];
//      b = b[0];
//  
//      return a.localeCompare(b);
//    }
//  
//    let arr = Object.entries(objCars).sort((a, b) => sortByMileage(a, b) || sortAlphabetically(a, b));
//  
//    for (let i = 0; i < arr.length; i++) {
//      console.log(`${arr[i][0]} -> Mileage: ${arr[i][1].mileage} kms, Fuel in the tank: ${arr[i][1].fuel} lt.`);
//    }
//  }
//  needForSpeed([
//    '3',
//    'Audi A6|38000|62',
//    'Mercedes CLS|11000|35',
//    'Volkswagen Passat CC|45678|5',
//    'Drive : Audi A6 : 543 : 47',
//    'Drive : Mercedes CLS : 94 : 11',
//    'Drive : Volkswagen Passat CC : 69 : 8',
//    'Refuel : Audi A6 : 50',
//    'Revert : Mercedes CLS : 500',
//    'Revert : Audi A6 : 30000',
//    'Stop'
//  ]);

function needForSpeedIII(input) {


    let numberOfCars = Number(input.shift());
    let cars = generateCars(numberOfCars);
    let commands = input.shift();

    while (commands !== 'Stop') {
        let [command, car, att2, att3] = commands.split(' : ');

        if (command === 'Drive') {
            let distance = Number(att2);
            let fuel = Number(att3);
            let current = [];
            Object.values(cars[car]).forEach(arr => {
                current.push(Number(arr));
            })
            let currentDistance = current[0];
            let currentFuel = current[1];
            if (currentFuel < fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                currentFuel -= fuel;
                currentDistance += distance;
                cars[car] = [currentDistance, currentFuel];
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (currentDistance >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }
        }else if(command === 'Refuel'){
            let current = [];
            let fuel = Number(att2);
            Object.values(cars[car]).forEach(el => {
                current.push(Number(el));
            });
            let currentDistance = current[0];
            let currentFuel = current[1];

            let diff = 75 - currentFuel;
            currentFuel += fuel;
            if(currentFuel > 75){
                currentFuel = 75;
                cars[car] = [currentDistance, currentFuel];
                console.log(`${car} refueled with ${diff} liters`);
            }else{
                cars[car] = [currentDistance, currentFuel];
                console.log(`${car} refueled with ${fuel} liters`);
            }
        }else if(command === 'Revert'){
            let current = [];
            let kilometers = Number(att2);
            Object.values(cars[car]).forEach(el => {
                current.push(Number(el));
            });
            let currentDistance = current[0];
            let currentFuel = current[1];

            currentDistance -= kilometers;
            if(currentDistance > 10000){
                cars[car] = [currentDistance, currentFuel];
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }else{
                currentDistance = 10000;
                cars[car] = [currentDistance, currentFuel];
            }
        }
        commands = input.shift();
    }


    let sortedByMilage = Object.entries(cars).sort((a,b) => {
        let milage1 = a[1][0];
        let milage2 = b[1][0];
        let name1 = a[0];
        let name2 = b[0];
        return milage2 - milage1 || name1.localeCompare(name2);
    })

    for (const iterator of sortedByMilage) {
        let car = iterator.shift();
        let arr = iterator.shift();
        console.log(`${car} -> Mileage: ${arr[0]} kms, Fuel in the tank: ${arr[1]} lt.`);
    }
    
    function generateCars(number) {
        let cars = {};
        for (let i = 0; i < number; i++) {
            let [mark, milage, fuel] = input.shift().split('|');
            milage = Number(milage);
            fuel = Number(fuel);
            if (!cars['mark']) {
                cars[mark] = [milage, fuel];
            }
        }
        return cars;
    }

}

needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
);