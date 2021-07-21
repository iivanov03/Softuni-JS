function destinations(string) {
    let regex = /(=|\/)[A-Z][A-Za-z]{2,}\1/g
    let locations = [];
    let valid;
    let travelPoints = 0;
    while((valid = regex.exec(string)) !== null) {
        locations.push(valid[0]);
    }
    for(let i = 0; i < locations.length; i++) {
        locations[i] = locations[i].substring(1, locations[i].length - 1);
        travelPoints += locations[i].length;
    }
    console.log(`Destinations: ${locations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`); 
}
destinations('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')