function solve(firstTime, secondTime, thirdTime){
    firstTime = Number(firstTime);
    secondTime = Number(secondTime);
    thirdTime = Number(thirdTime);
    
    let totalSecond = firstTime + secondTime + thirdTime;

    let minutes = Math.trunc(totalSecond / 60);

    let second = totalSecond % 60;

    if (second < 10){
        console.log(`${minutes}:0${second}`);
    } else{
        console.log(`${minutes}:${second}`);
    }



}
solve("35", "45", "44");