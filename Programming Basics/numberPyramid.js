function solve(n){
    n = Number(n[0]);

    let current = 1;
    let flag = false;
    let printCurrent = "";
    for(let r = 1; r <= n; r++){
        for(let c = 1; c <= r; c++){
            if (current > n){
                flag = true;
                break;
            }
            printCurrent += current + " ";
            current++
        }
        console.log(printCurrent);
        printCurrent = "";
        if(flag){
            break;
        }
    }
}
solve(["12"])