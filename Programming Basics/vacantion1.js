function solve(input){
    let index = 0;
    let neededMoney = Number(input[index++]);
    let savedMoney = Number(input[index++]);

    let sumSaveSpend = 0;
    let days = 0;
    while(savedMoney < neededMoney){
        let spendsaved = input[index++];
        let money = Number(input[index++]);
        days++;
        if(spendsaved === "spend"){
            if(savedMoney < money){
                savedMoney = 0;
            } else{
                savedMoney -= money
            }
            sumSaveSpend++;

            if(sumSaveSpend === 5){
                break;
            }
        } else{
            sumSaveSpend = 0;
            savedMoney += money;
        }
    }
    if(sumSaveSpend === 5){
        console.log("You can't save the money.");
        console.log(days);
    }else{
       console.log(`You saved the money for ${days} days.`) 
    }
}solve(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
