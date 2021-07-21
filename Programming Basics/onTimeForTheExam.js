function solve(examHour, examMinute, arrivelHour, arrivelMinute){
    examHour = Number(examHour);
    examMinute = Number(examMinute);
    arrivelHour = Number(arrivelHour);
    arrivelMinute = Number(arrivelMinute);

    let totalExamMinutes = examHour * 60 + examMinute;
    let totalArriveMinutes = arrivelHour * 60 + arrivelMinute;
    let diff = totalExamMinutes - totalArriveMinutes;

    if(diff > 30){
        console.log(`Early`);
        if(diff >= 60){
            let hour = Math.trunc(diff / 60);
            let minutes = diff % 60;
            if (minutes < 10){
                minutes = `0${minutes}`;
            }
            console.log(`${hour}:${minutes} hours before the start`);
        }else{
            console.log(`${diff} minutes before the start`);
        }


    }else if(diff >= 0){
        console.log(`On time`);
        
        if(diff !== 0){
            console.log(`${diff} minutes before the start`);
        }
    }else{
        console.log(`Late`);
        diff = Math.abs(diff);

        if(diff >= 60){
            let hour = Math.trunc(diff / 60);
            let minutes = diff % 60;

            if(minutes < 10){
                minutes = `0${minutes}`;
            }
            console.log(`${hour}:${minutes} hours after the start`);
        }else {
            console.log(`${diff} minutes after the start`);
        }
        
    }
}solve("9", "00", "10", "30");
solve("10", "00", "10", "00")