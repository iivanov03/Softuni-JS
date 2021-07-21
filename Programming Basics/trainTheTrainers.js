function solve(input){
    let index = 0;
    let juries = Number(input[index++]);
    let gradeCount = 0;
    let presentationCount = 0;
    let presentation = input[index++];

    while(presentation !== 'Finish'){
        let presentationSum = 0;

        for(let i = 0; i < juries; i++){
            let Grades = Number(input[index++]);
            presentationSum += Grades;
        }
        let presentationAverage = presentationSum / juries;
        console.log(`${presentation} - ${presentationAverage.toFixed(2)}.`);
        presentationCount++;
        gradeCount += presentationAverage;

        presentation = input[index++];
    }
    console.log(`Student's final assessment is ${(gradeCount / presentationCount).toFixed(2)}.`);

}
solve(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])