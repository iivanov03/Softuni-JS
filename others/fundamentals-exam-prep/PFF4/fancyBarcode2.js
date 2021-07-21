function barcodeValidator(input) {
    input.shift();
    let regex = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/;
    for (let line of input) {
        if (regex.test(line)) {
            let tokens = regex.exec(line);
            let barcode = tokens[2];
            let numbers = [...barcode]
                            .filter(sim => /\d/.test(sim))
                            .join('');
            let product = numbers === '' ? '00' : numbers;
            console.log(`Product group: ${product}`);
        } else{
            console.log(`Invalid barcode`);
        }
    } 
}
barcodeValidator([  '3',
                    '@#FreshFisH@#',
                    '@###Brea0D@###',
                    '@##Che4s6E@##'
    ]
)