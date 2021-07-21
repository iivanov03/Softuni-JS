function solve(input){
    let productCatalog = {};
    for (let line of input) {
        let [productName, productPrice] = line.split(' : ');
        productPrice = Number(productPrice);

        let initial = productName[0].toUpperCase();

        if(productCatalog[initial] === undefined){
            productCatalog[initial] = {};
        }

        productCatalog[initial][productName] = productPrice;

    }
    let result = [];
    let sortCatalog = Object.keys(productCatalog).sort((a, b) => a.localeCompare(b));
    for (const key of sortCatalog) {
       let products = Object.entries(productCatalog[key]).sort((a, b) => a[0].localeCompare(b[0]))
       result.push(key);
       let productsString = products.map(x => `  ${x[0]}: ${x[1]}`).join('\n');
       result.push(productsString);
    }
    return result.join('\n');
}
console.log(solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
))