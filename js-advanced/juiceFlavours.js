function solve(juiceArr){
    let juiceAmount = new Map();
    let juiceBottles = new Map();

    for (const line of juiceArr) {
        let [juiceName, amount] = line.split(' => ');
        amount = Number(amount);

        if(!juiceAmount.has(juiceName)){
            juiceAmount.set(juiceName, 0);
        }
        let totalAmount = juiceAmount.get(juiceName) + amount;

        if(totalAmount >= 1000){
           if(!juiceBottles.has(juiceName)){
            juiceBottles.set(juiceName, 0);
            } 
            let newBottle = Math.trunc(totalAmount / 1000);
            let totalBottles = juiceBottles.get(juiceName) + newBottle;
            juiceBottles.set(juiceName, totalBottles);
        }

        

        juiceAmount.set(juiceName, totalAmount % 1000);
    }
    return [...juiceBottles].map(([key, value]) => `${key} => ${value}`).join('\n');
}

console.log(solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
));