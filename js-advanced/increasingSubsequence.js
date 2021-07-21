function solve(arr){
    let result = arr.reduce((acc, element) => {
        if(acc.length === 0 || element >= acc[acc.length - 1]){
            acc.push(element);
        }
        return acc;
    }, []);
    return result;
}
console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))