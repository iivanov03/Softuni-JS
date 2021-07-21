function solve(budget, season){
    budget = Number(budget);
    let cost;
    if(budget <= 100){
        let type;
        if(season === "summer"){
            cost = budget * 0.3;
            type = `Camp`;
        }else if(season === "winter"){
            cost = budget * 0.7;
            type = `Hotel`;
        }
        console.log(`Somewhere in Bulgaria`);
        console.log(`${type} - ${cost.toFixed(2)}`);
    }else if(budget <= 1000){
        if(season === "summer"){
            cost = budget * 0.4;
            type = `Camp`;
        }else if(season === "winter"){
            cost = budget * 0.8;
            type = `Hotel`;
        }  
        console.log(`Somewhere in Balkans`);
        console.log(`${type} - ${cost.toFixed(2)}`)
    }else {
        if(season === "summer"){
            cost = budget * 0.9;
            type = `Hotel`;
        }else if(season === "winter"){
            cost = budget * 0.9;
            type = `Hotel`;
        }  
        console.log(`Somewhere in Europe`);
        console.log(`${type} - ${cost.toFixed(2)}`)
    }
}solve("1234", "summer");