function solve(input){
    input = Number(input);
    let combinations = 0;
    for(x1 = 0; x1 <= input; x1++){
        for(x2 = 0; x2 <= input; x2++){
            for(x3 = 0; x3 <= input; x3++){
                
                if(x1 + x2 + x3 === input){
                    combinations++;
                } 
            }
        }
    }
    console.log(combinations);
}
solve(["25"])