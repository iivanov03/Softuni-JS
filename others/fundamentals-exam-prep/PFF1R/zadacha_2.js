//function problemTwo(input){ 
//    let pattern = /(\$|\%)(?<tag>[A-Z][a-z]{2,})\1:[ ](\[[0-9]+\]\|){3}/g
//    while(isNaN(input[0])){
//        input.shift()
//    }
//    input.shift()
//    for(let data of input){
//        let [tag,chars] = data.split(": ")
//        if(pattern.exec(data)){
//            let sum = []
//            let charReg = /[0-9]+/g
//            let match = pattern.exec(data)
//            let char = chars.match(charReg)
//            for(let line of char){
//                sum.push(line.fromCharCode(0))
//            }
//            console.log(`${match.groups.tag}: ${sum[0]} ${sum[1]} ${sum[2]}`);
//        }
//        else{
//            console.log("Valid message not found!")
//        }
//    }
//}
////problemTwo(["4",
////"$Request$: [73]|[115]|[105]|",
////"%Taggy$: [73]|[73]|[73]|",
////"%Taggy%: [118]|[97]|[108]|",
////"$Request$: [73]|[115]|[105]|[32]|[75]|"])
//
//
//function problemTwo(input = []){
//    let n = input.shift();
//    let regex = /(\$|%)(?<tag>[A-Z]{1}[a-z]{2,})\1:\s{1}\[(?<number1>[0-9]+)\]\|\[(?<number2>[0-9]+)\]\|\[(?<number3>[0-9]+)\]\|/g;
//    for(let i = 0; i < n; i++){
//        if(regex.test(input)){
//            
//        } else {
//            console.log('Valid message not found!')
//        }
//    }
//}
//
//
//problemTwoproblemTwo(["4",
//"$Request$: [73]|[115]|[105]|",
//"%Taggy$: [73]|[73]|[73]|",
//"%Taggy%: [118]|[97]|[108]|",
//"$Request$: [73]|[115]|[105]|[32]|[75]|"])

function problemTwo(input) {
    let rgx = /(^[\$|%])([A-Z][a-z]{2,})\1: \[([0-9]+)]\|\[([0-9]+)]\|\[([0-9]+)]\|$/;
    input.shift();
    for(i = 0; i < input.length; i++){
        let arr = input[i].match(rgx);
        if (arr) {
            let tag = arr[2];
            let first = String.fromCharCode(arr[3]);
            let second = String.fromCharCode(arr[4]);
            let third = String.fromCharCode(arr[5]);
            console.log(`${tag}: ${first}${second}${third}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}
problemTwo(["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"]);
