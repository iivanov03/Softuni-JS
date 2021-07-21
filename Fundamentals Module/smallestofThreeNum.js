function smallestOfThree(x, y, z){
    let smallestNum = Number.MAX_SAFE_INTEGER;

    for (const n of arguments) {
        getSmaller(n);
    }
    function getSmaller(n){
        if(n <smallestNum){
            smallestNum = n;
        }
    }
    return smallestNum;
}