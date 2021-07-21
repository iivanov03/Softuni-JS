function solve(metersPrice){
    metersPrice = Number(metersPrice);
    let oneMeterPrice = 7.61;
    let price = metersPrice * oneMeterPrice;
    let discountPrice = price * 0.18;
    let totalPrice = price - discountPrice;
    console.log(totalPrice, discountPrice);
    
}
solve("550")