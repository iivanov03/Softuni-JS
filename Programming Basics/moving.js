function solve(arr) {
    let width = Number(arr[0]);
    let depth = Number(arr[1]);
    let height = Number(arr[2]);
    let space = width*depth*height;
 
    let index = 3;
    while (arr[index] != "Done" && index < arr.length) {
        arr[index] = Number(arr[index]);
        space-= arr[index];
        index++;
    }
    if (space < 0) {
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
    } else {
        console.log(`${space} Cubic meters left.`);
    }
}
solve(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])