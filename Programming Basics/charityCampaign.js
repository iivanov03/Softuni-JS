function solve(fullDays, allBakers, cupcake, waffles, pancakes){
    fullDays = Number(fullDays);
    allBakers = Number(allBakers);
    cupcake = Number(cupcake);
    waffles = Number(waffles);
    pancakes = Number(pancakes);
    
    let cupcakePerDay = cupcake * 45;
    let wafflesPerDay = waffles * 5.80;
    let pancakesPerDay = pancakes * 3.20;

    let profitPerDay = (cupcakePerDay + wafflesPerDay + pancakesPerDay) * allBakers;
    let allProfit = (profitPerDay * 7/8) * fullDays ;
    
    console.log(allProfit);
}
solve("23", "8", "14", "30", "16");
