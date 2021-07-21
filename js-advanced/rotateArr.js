function solve(arr, rotations){
    let arrRotations = rotations % arr.length;
    for (let i = 0; i < arrRotations; i++){
        let element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(' '));
}
solve(['1', 
'2', 
'3', 
'4'], 
2
)