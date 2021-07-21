function solve(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let str = '';

    for(let i = startNum; i <= endNum; i++){
        let oddNum = 0;
        let evenNum = 0;
        let numToSte = i.toString();
        
        for(let j = 0; j < numToSte.length; j++){
            let digit = Number(numToSte[j]);

            if (j % 2 === 0){
                evenNum += digit;
            } else{
                oddNum += digit; 
            }
            
        }
        
        if(evenNum === oddNum){
            str += i + ' ';
        }
    }
    console.log(str);
}
solve(["100000",
 "100050"]);