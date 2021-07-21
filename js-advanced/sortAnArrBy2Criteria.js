function solve(arr){
    arr.sort(sortArr);
    arr.forEach(el => console.log(el));
    function sortArr(current, next){
        if(current.length === next.length){
            return current.localeCompare(next)
        }
        return current.length - next.length;
    }
}
solve(['alpha', 
'beta', 
'gamma']
)