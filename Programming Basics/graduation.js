function solve(input) {
    let name = input[0];
    let index = 1;
    let average = 0;
    let repeat = 0;
    let grade = 0;
    let sum = 0;
    while (index < input.length) {
        input[index] = Number(input[index]);
        
        if (input[index] < 4) {
            index++;
            repeat +=1;
            if (repeat == 2) {
                break;
            }
            continue;
        }
        grade++;
        sum += input[index];
        index++;
    }
    if (repeat < 2) {
        average = sum/grade;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${grade+1} grade`);
    }
    
}
solve(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);