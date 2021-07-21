function excellentGrade(num) {
    if (num >= 5.50) {
        console.log("Excellent!");
    }
}
 
function biggerNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
 
function oddOrEven(num) {
    let a = num;
    if (a % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
 
function numberFrom100to200(num) {
    if (num < 100) {
        console.log("Less than 100");
    } else if (num <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}
 
function checkPassword(pass) {
    if (pass == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
 
function findArea(figureType, firstNum, secondNum) {
    let result;
 
    if (figureType == "square") {
        result = firstNum * firstNum;
        // result = Math.pow(firstNum, 2);
    } else if (figureType == "rectangle") {
        result = firstNum * secondNum;
    } else if (figureType == "circle") {
        result = Math.pow(firstNum, 2) * Math.PI;
    } else if (figureType == "triangle") {
        result = (firstNum * secondNum) / 2;
    }
 
    console.log(result.toFixed(3));
}
 
function totalWinnings(tripPrice, jigsaw, dolls, bears, minions, trucks) {
    let jigsawPrice = 2.60;
    let dollsPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;
 
    let totalCount = Number(jigsaw) + Number(dolls) + Number(bears) + Number(minions) + Number(trucks);
    let priceMultiplier = 1;
    if (totalCount >= 50) {
        priceMultiplier = 0.75;
    }
 
    let total = jigsaw * Number(jigsawPrice) + dolls * Number(dollsPrice) + 
                bears * Number(bearPrice) + minions * Number(minionPrice) + 
                trucks * Number(truckPrice);
 
    total = total * priceMultiplier;
 
    let finalMoney = total - total * 0.10;
 
    tripPrice = Number(tripPrice);
    if (finalMoney >= tripPrice) {
        console.log(`Yes! ${(finalMoney - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - finalMoney).toFixed(2)} lv needed.`)
    }
}