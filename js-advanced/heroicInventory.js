function solve(input) {
    let result = [];
    for(let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(' / ');
        level = Number(level);
        items = items !== undefined ? items.split(', ') : [];
        result.push({name: name, level: level, items: items});
    }
    return JSON.stringify(result);
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
))