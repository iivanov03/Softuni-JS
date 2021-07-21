// function solve(pricePage, priceCover, discountPrice, designPrice, teamDiscount){
//     pricePage = Number(pricePage);
//     priceCover = Number(priceCover);
//     discountPrice = Number(discountPrice);
//     designPrice = Number(designPrice);
//     teamDiscount = Number(teamDiscount);

//     let startPrice = (pricePage * 899) + (priceCover * 2);
//     let discount = startPrice - startPrice * (discountPrice / 100);
//     let priceTwo = discount + designPrice;
//     let finalPrice = priceTwo - priceTwo * (teamDiscount / 100);
//     console.log(`Avtonom should pay ${finalPrice.toFixed(2)} BGN.`)
// }
// // solve(0.01, 1, 10, 20, 20);

// function solve2(numProcessors, numEmploy, workDays){
//     numProcessors = Number(numProcessors);
//     numEmploy = Number(numEmploy);
//     workDays = Number(workDays);

//     let hoursWork = numEmploy * workDays * 8;
//     let make = Math.floor(hoursWork / 3);
//     let profLoss = Math.abs(numProcessors - make);
//     let profLossTwo = profLoss * 110.10
//     if (numProcessors > make){
//         console.log(`Losses: -> ${profLossTwo.toFixed(2)} BGN`);
//     } else {
//         console.log(`Profit: -> ${profLossTwo.toFixed(2)} BGN`);
//     }
// }
// solve2(500, 8, 20);

// function solve3(month, numHours, numPeople, dayTime){
//     numHours = Number(numHours);
//     numPeople = Number(numPeople);
//     let price = 0;
//     let discountPeople = 0;
//     let discountHour = 0;

//     switch(month){
//         case "march":
//             if(dayTime === "day"){
//                  price = 10.50;
//             } else{
//                  price = 8.40; 
//             }
//             break;
//         case "april":
//             if(dayTime === "day"){
//                  price = 10.50;
//             } else{
//                  price = 8.40; 
//             }
//             break;
//         case "may":
//             if(dayTime === "day"){
//                  price = 10.50;
//             } else{
//                  price = 8.40; 
//             }
//             break;
//         case "june":
//             if(dayTime === "day"){
//                  price = 12.60;
//             } else{
//                  price = 10.20; 
//             }
//             break;
//         case "july":
//             if(dayTime === "day"){
//                  price = 12.60;
//             } else{
//                  price = 10.20; 
//             }
//             break;
//         case "august":
//                 if(dayTime === "day"){
//                      price = 12.60;
//                 } else{
//                      price = 10.20; 
//                 }
//                 break;
//     }

//     if(numPeople >= 4){
//         price =price - price * 0.1;
//     }
//     if(numHours >= 5){
//         price =price - price * 0.5;
//     }

//     console.log(`Price per person for one hour: ${price.toFixed(2)}`);
//     console.log(`Total cost of the visit: ${(price * numPeople * numHours).toFixed(2)}`);
// }
// solve3("march", 3, 3, "day");
// solve3("july", 5, 5, "night");

function solve4(arr){
    let n = Number(arr[0]);
    let m = Number(arr[1]);
    let s = Number(arr[2]);
    let magicNum = 0;

    for(let i = m; i <= n - 1; i++){
        if(i % 2 === 0 && i % 3 === 0){
            magicNum++;
            if(i === s){
                break;
            }
            
        }
    }
    console.log(magicNum)
}
// solve4([1, 30, 15])

// function solve5(arr){
//     index = 0;
//     let peopleOver = 0;
//     let peopleUnder = 0;
//     let toyPrice = 5;
//     let dressPrice = 15;

//     while(arr[index] != "Christmas"){
//       if(arr[index] <= 16){
//           peopleUnder++;
//       }  else if(arr[index] > 16){
//           peopleOver++;
//       }

//       index++;
//     } 
//     console.log(`Number of adults: ${peopleOver}`);
//     console.log(`Number of kids: ${peopleUnder}`);
//     console.log(`Money for toys: ${peopleUnder * toyPrice}`);
//     console.log(`Money for sweaters: ${peopleOver * dressPrice}`)
// }
// solve5([16, 20, 46, 12, 8, 20, 49, "Christmas"]);

function solve6(arr){
    let numLocation = Number(arr[0]);
    let averageExtraction = 0;
    let extractionDays = 0;
    let moreGold = 0;

    for(let i = 1; i <= numLocation; i++){
        let numLocation = i;
        for(let j = 1; j <= extractionDays; j++){

        }
    }
}



