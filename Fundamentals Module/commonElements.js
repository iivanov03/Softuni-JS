function SOlve(firstArr, secondArr){
    for (const element of firstArr) {
        for (const secondElement of secondArr) {
            if(element === secondElement){
                console.log(element);
            }
        }
    }   
}