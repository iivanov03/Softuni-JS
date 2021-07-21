 function solve(input){
     let index = 0;
     let maxUnsatiGrades = Number(input[index++]);
     let unasatiGrades = 0;
     let sumGrades = 0;
     let allProblem = 0;
     let lastProblem = undefined;
     let nowProblem = input[index++];
     while(nowProblem !== "Enough"){
         let currentGrade = Number(input[index++]);

         if (currentGrade <= 4){
             unasatiGrades++;
             if(unasatiGrades === maxUnsatiGrades){
                 break;
             }
         }
         sumGrades += currentGrade;
         allProblem++;
         lastProblem = nowProblem;

         nowProblem = input[index++];
     }
     if(unasatiGrades === maxUnsatiGrades){
         console.log(`You need a break, ${maxUnsatiGrades} poor grades.`);
     }else{
         console.log(`Average score: ${(sumGrades / allProblem).toFixed(2)}`);
         console.log(`Number of problems: ${allProblem}`);
         console.log(`Last problem: ${lastProblem}`);
     }
}

function sol(input){
    let index = 0;
    let maxUnsatiGrades = Number(input[index++]);
    let unasatiGrades = 0;
    let gradeSum = 0;
    let problemCount = 0;
    let lastProblem = undefined;

    let currentProblem = input[index++]
    while(currentProblem !== "Enough") {
        let currentGrade = Number(input[index++]);

        if(currentGrade <= 4) {
            unasatiGrades++;

            if (unasatiGrades === maxUnsatiGrades) {
                break;
            }
        }
        gradeSum += currentGrade;
        problemCount++;
        lastProblem = currentProblem;

        currentProblem = input[index++];
    }
    if (unasatiGrades === maxUnsatiGrades) {
        console.log(`You need a break, ${maxUnsatiGrades} poor grades.`);
    }else {
        console.log(`Average score: ${(gradeSum / problemCount).toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
    
}
solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);