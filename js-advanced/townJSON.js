function solve(input){
    input.shift();
    let result = [];
    for (let line of input) {
        let [Town, Latitude, Longitude] = line.split('|').filter(x => x !== '');

        Latitude = Number(Latitude).toFixed(2);
        Longitude = Number(Longitude).toFixed(2);

        result.push({
            Town: Town.trim(),
            Latitude: Number(Latitude),
            Longitude: Number(Longitude)
        })
    }
    return JSON.stringify(result);

}
console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
))