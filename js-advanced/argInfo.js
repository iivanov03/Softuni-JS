function solve(...params) {
    let occurrences = {};
    let result = [];

    params.forEach(el => {
        let types = typeof el;
        result.push(`${types}: ${el}`);
        occurrences[types] = occurrences[types] !== undefined 
        ? ++occurrences[types]
        : 1;
    })

    Object.keys(occurrences)
    .sort((a, b) => occurrences[b] - occurrences[a])
    .forEach(key => result.push(`${key} = ${occurrences[key]}`));

    result.forEach(el => {
        console.log(el);
    })
}
solve({ name: 'bob'}, 3.333, 9.999)