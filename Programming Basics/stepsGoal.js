function solve(input){
    let index = 0;
    let goalSteps = 10000;
    let steps = 0;

    while(steps < goalSteps){
        let command = input[index++];

        if(command === "Going home"){
            steps += Number(input[index++]);
            break;
        }
        steps += Number(command);
    }
    let sumSteps = Math.abs(steps - goalSteps);
    if (steps < goalSteps){
        console.log(`${sumSteps} more steps to reach goal.`);
    } else{
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps} steps over the goal!`);
    }
}
solve(["1000",
"1500",
"2000",
"6500"])