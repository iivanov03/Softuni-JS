function solve(arr){
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (const line of arr) {
        let [comm, n] = line.split(' ');
        if (comm === "Add"){
            wagons.push(Number(n));
        } else {
            let passangers = Number(comm);
            for (let i = 0; i < wagons.length;  i++){
            if(wagons [i] + passangers <= capacity){
                wagons[i] += passangers;
                break;
            }
            }
        }
    }
    return wagons.join(' ')
}
console.log(solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])
)