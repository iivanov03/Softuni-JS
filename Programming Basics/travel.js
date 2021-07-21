function travel(input){
    let i=1;
    let countryWanted=input[0];
    let budget=0;
    let sum=0;
     
    while(countryWanted!=="End"){
        budget=Number(input[i++]);
        sum=0;
     
    while (sum<budget) {
        let money=Number(input[i++]);
        sum+=money;
        }
        console.log(`Going to ${countryWanted}!`);
        countryWanted=input[i++];
    }
    }
    travel(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
    
    