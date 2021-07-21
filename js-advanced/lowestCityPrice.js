function solve(input){
    let products = {};
    for (let line of input) {
        let [townName, productName, productPrice] = line.split(' | ');
        productPrice = Number(productPrice);

        if(!products.hasOwnProperty(productName)){
            products[productName] = {};
        }

        products[productName][townName] = productPrice;

    }
    let result = [];
    for (let key in products) {
        let townSorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
        let cheapTown = townSorted[0];
        result.push(`${key} -> ${cheapTown[1]} (${cheapTown[0]})`);
    }
    return result.join('\n');
}
console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
))