function solve(month, night){
    night = Number(night)
     let sPrice;
     let aPrice;

     switch(month){
        case "May":
        case "October":
            sPrice = 50 * night;
            aPrice = 65 * night;
        if (night > 7 && night <=  14){
            sPrice = sPrice * 0.95;
        }else if(night > 14){
            sPrice = sPrice * 0.70;
        }
        break;
        case "June":
        case "September":
            sPrice = 75.20 * night;
            aPrice = 68.70 * night;
        if(night > 14){
            sPrice = sPrice * 0.80
        }
        break;
        case "July":
        case "August":
            sPrice = 76 * night;
            aPrice = 77 * night;
        break;
     }
     if(night > 14){
         aPrice = aPrice * 0.90
     }
     console.log(`Apartment: ${aPrice.toFixed(2)} lv.`);
     console.log(`Studio: ${sPrice.toFixed(2)} lv.`);
}
solve("May", "15");
solve("June", "14");
solve("August", "20");