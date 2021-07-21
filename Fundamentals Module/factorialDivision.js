function divideFactorial(a, b){

    function factorialSum(n){
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
    console.log((factorialSum(a) / factorialSum(b)).toFixed(2));

}
divideFactorial(6, 2);