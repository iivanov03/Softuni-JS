function solve(points){
    points = Number(points);
    let bonusPoints = 0;

     if(points > 1000){
         bonusPoints = points * 0.1;
     } else if(points > 100){
         bonusPoints = points * 0.2;
     } else{
         bonusPoints = 5;
     }

     if(points % 2 === 0){
         bonusPoints = bonusPoints + 1
     }
     if(points % 10 === 5){
         bonusPoints = bonusPoints + 2;
     }
    console.log(bonusPoints);
    console.log(points + bonusPoints); 
}
solve("20");