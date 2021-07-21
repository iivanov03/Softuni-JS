function solve(recordS, distanceM, timePerOneM){
    recordS = Number(recordS);
    distanceM = Number(distanceM);
    timePerOneM = Number(timePerOneM);

    let ivansTime = distanceM * timePerOneM;
    ivansTime =ivansTime + Math.floor(distanceM / 15) * 12.5;

    if (ivansTime < recordS){
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`);
    } else{
        let left = ivansTime - recordS;
        console.log(`No, he failed! He was ${left.toFixed(2)} seconds slower.`);

    }

}
solve("10464", "1500", "20");
solve("55555.67", "3017", "5.03");