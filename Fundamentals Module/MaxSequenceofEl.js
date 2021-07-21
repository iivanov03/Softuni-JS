function solve(arr){
    let sequence = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        let currSequence = [element];
        for (let  j = index + 1; j < arr.length; j++){
            if(element == arr[j]){
                currSequence.push(element);
            } else {
                break;
            }
        }

        if (sequence.length < currSequence.length){
            sequence = currSequence;
        }
        
    }
    
    console.log(sequence.join(' '));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])

