function solve(toConvert, firsteUnit, secondUnit){
    toConvert = Number(toConvert);
    let result;
    result = Number(result);
 

    if (firsteUnit === "mm"){
        if (secondUnit === "m"){
            result = toConvert / 1000;
        }
        else if (secondUnit === "cm"){
            result = toConvert / 100;
        }
        else{
            result = toConvert;
        }
    } else if (firsteUnit === "cm"){
        if (secondUnit === "m"){
           result = toConvert / 100; 
        } else if (secondUnit === "mm"){
            result = toConvert / 10;
        } else{
            result = toConvert;
        }
    } else {
        if (secondUnit === "cm"){
            result = toConvert * 100;
        } else if (secondUnit === "mm"){
            result = toConvert * 1000;
        } else {
            result = toConvert;
        }
    }
    console.log(result.toFixed(3));
}
solve("150", "m", "cm");