function solve(film, r, c){
    r = Number(r);
    c = Number(c);
    let income = 0;

    if(film == "Premiere"){
        income = r * c * 12;
    }else if(film == "Normal"){
        income = r * c * 7.50;
    }else if(film == "Discount"){
        income = r * c * 5;
    }
    console.log(income.toFixed(2));
}solve("Premiere", "10", "12");