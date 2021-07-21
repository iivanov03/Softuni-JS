function solve(depositedSum, term, interestRate){
    depositedSum = Number(depositedSum);
    term = Number(term);
    interestRate = Number(interestRate);

    let totalInterst = depositedSum * interestRate / 100;
    totalInterst = totalInterst / 12;
    let result = depositedSum + term * totalInterst;
    console.log(result);
}
solve("200", "3", "5.7");