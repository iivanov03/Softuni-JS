function solve(type, flowers, budget){
    flowers = Number(flowers);
    budget = Number(budget);
    let cost;

    switch(type){
        case "Roses":
            cost = 5 * flowers;
        if (flowers > 80){
            cost = cost * 0.9;
        }
        break;
        case "Dahlias":
            cost = 3.80 * flowers;
        if(flowers > 90){
            cost = cost * 0.85
        }
        break;
        case "Tulips":
            cost = 2.80 * flowers;
        if(flowers > 80){
            cost = cost * 0.90;
        }
        break;
        case "Narcissus":
            cost = 3 * flowers;
        if(flowers < 120){
            cost = cost * 1.15;
        }
        break;
        case "Gladiolus":
            cost = 2.50 * flowers;
        if(flowers < 80){
            cost = cost * 1.20;
        }
        break;
    }
    let money = Math.abs(budget - cost).toFixed(2);
    if(cost <= budget){
        console.log(`Hey, you have a great garden with ${flowers} ${type} and ${money} leva left.`)
    }else {
        console.log(`Not enough money, you need ${money} leva more.`)
    }
}solve("Roses", "55", "250");