function add(number){
    let sum = 0;
    function sumExec(num){
        sum += num;
        return sumExec;
    }
    sumExec.toString = () => {
        return sum;
    }
    return sumExec(number);
}

let a = add(1)(6)(-3);
console.log(a.toString());