function solve(filmBudget, statists, statclot){
    filmBudget = Number(filmBudget);
    statists = Number(statists);
    statclot = Number(statclot);

    let decorPrice = filmBudget * 0.1;
    let clotPrice = statists * statclot;

    if (statists > 150){
        clotPrice = clotPrice - (clotPrice * 0.1);
    }

    let total =decorPrice + clotPrice;
    
    if (total > filmBudget){
        let needed = total - filmBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`);

    }else{
        let left = filmBudget - total;
        console.log("Action!");
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`);
    }

}
solve("20000", "120", "55.5");