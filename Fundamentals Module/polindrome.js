function polindrome(arr){
    function isPolindrome(n){
        let revN = n.toString().split('').reverse().join('');
        return Number(revN) === n ? true : false;
    }

    let printLines = '';
    for (let n of arr) {
        printLines += isPolindrome(n) + '\n';
    }
    return printLines;
}