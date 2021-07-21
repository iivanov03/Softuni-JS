function worldTour(input) {
    let index = 0;
    let stops = input[index++];
    let command = input[index++];
    while (command !== "Travel") {
        if (command.includes("Add")) {
            let [cmd, index, replacement] = command.split(':');
            index = Number(index);
            if (index < stops.length && index >= 0) {
                let firstHalf = stops.substring(0, index);
                let secondHalf = stops.substring(index);
                stops = firstHalf + replacement + secondHalf;
                console.log(stops);
            }
        } else if (command.includes("Remove")) {
            let [cmd, start, end] = command.split(":");
            start = Number(start);
            end = Number(end);
            
        } else if (command.includes("Switch")) {
            let [cmd, substring, replacement] = command.split(":");
            while (stops.includes(substring)) {
                stops = stops.replace(substring, replacement);
            }
            console.log(stops);
        }
        command = input[index++];
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
// worldTour(['Hawai::Cyprys-Greece',
//     'Add Stop:7:Rome',
//     'Remove Stop:11:16',
//     'Switch:Hawai:Bulgaria',
//     'Travel']
// );

function worldTourSec(input){
    let destination = input.shift();
   
    for (let line of input) {
        if(line !== 'Travel'){
            let [command, ...tokens] = line.split(':');
            
            if(command === 'Add Stop'){
                let index = Number(tokens[0]);
                let stopName = tokens[1];
                if(index < destination.length && index >= 0){
                    let firstHalf = destination.substring(0, index);
                    let secondHalf = destination.substring(index);
                    destination = firstHalf + stopName + secondHalf;
                    console.log(destination);
                }
            } else if(command === 'Remove Stop'){
                let startIndex = Number(tokens[0]);
                let endIndex = Number(tokens[1]);
                let removedDestination = destination.substring(startIndex, endIndex + 1);
                destination = destination.replace(removedDestination, '');
                console.log(destination);
            } else if(command === 'Switch'){
                let [substring, substitude] = tokens;
                if(destination.includes(substring)){
                    destination = destination.replace(substring, substitude);
                    console.log(destination);
                }
            }
        }
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`);
}
worldTourSec(['Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel']
);