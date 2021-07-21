function solve(rent){
    rent = Number(rent);

    let cupcake = rent * 0.2;
    let drink = cupcake * 0.55;
    let animator = rent * 1/3;
    let result = rent + cupcake + drink + animator;
    console.log(result);
}
solve("2250");