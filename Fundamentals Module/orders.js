function orders(product, quantity){
        quantity = Number(quantity);
        let cost = 0;
    
        switch(product){
            case "coffee":
                cost = 1.50 * quantity;
            break;
            case "water":
                cost = 1.00 * quantity;
            break;
            case "coke":
                cost = 1.40 * quantity;
            break;
            case "snacks":
                cost = 2.00 * quantity;
            break;
        }
        console.log(cost.toFixed(2));
    
}
orders('coffee', 2)