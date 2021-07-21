function solve(input){
    let index = 0;
    let resto =Math.trunc(Number(input[index++]) * 100);
    let coins = 0;

    while(resto > 0){
        if(resto >= 200){
            resto -= 200;
        } else if(resto >= 100) {
            resto -= 100;
        } else if(resto >= 50) {
            resto -= 50;
        } else if(resto >= 20) {
            resto -= 20;
        } else if(resto >= 10) {
            resto -= 10;
        } else if(resto >= 5) {
            resto -= 5;
        } else if(resto >= 2) {
            resto -= 2;
        } else {
            resto -= 1;
        }
        coins++;
    }
    console.log(coins);
}
solve(["2.73"]);