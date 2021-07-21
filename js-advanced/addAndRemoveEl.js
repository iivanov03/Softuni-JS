function solve(command){
    let result = [];
    for (let i = 0; i < command.length; i++) {
        if(command[i] === 'add'){
            result[i] = i + 1;
        } else if(command[i] === 'remove'){
            result.pop();
        }
    }

    if(result.length < 1){
        console.log('Empty');
    }
    let filterdArr = result.filter(num => num !== undefined);
    return filterdArr.join('\n');
}
console.log(solve(['remove', 
'remove', 
'remove']


));