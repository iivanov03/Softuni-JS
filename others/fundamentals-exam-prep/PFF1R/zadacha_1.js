function firstProblem(input) {
    let word = input.shift();
    for (let line of input) {
        if (line !== 'Finish') {

            let [command, firstElement, secondElement] = line.split(' ');

            if (command === 'Replace') {
                while (word.includes(firstElement)) {
                    word = word.replace(firstElement, secondElement);
                }
                console.log(word);
            }

            else if (command === 'Cut') {
                let startIndex = Number(firstElement);
                let endIndex = Number(secondElement);
                if (
                    startIndex >= 0 &&
                    startIndex <= endIndex &&
                    endIndex < word.length
                ) {
                    let startCut = word.substring(0, startIndex);
                    let endCut = word.substring(endIndex + 1);
                    word = startCut + endCut;
                    console.log(startCut + endCut);
                } else {
                    console.log(`Invalid indices!`);
                }
            }

            else if (command === 'Make') {
                if (firstElement === 'Upper') {
                    word = word.toUpperCase();
                } else if (firstElement === 'Lower') {
                    word = word.toLowerCase();
                }
                console.log(word);
            }

            else if (command === 'Check') {
                if (word.includes(firstElement)) {
                    console.log(`Message contains ${firstElement}`);
                } else {
                    console.log(`Message doesn't contain ${firstElement}`);
                }
            }
            
            else if (command === 'Sum') {
                let startIndex = Number(firstElement);
                let endIndex = Number(secondElement);
                if (
                    startIndex >= 0 &&
                    startIndex <= endIndex &&
                    endIndex < word.length
                ) {
                    let cuttedWord = word.substring(startIndex, endIndex + 1);
                    let sum = 0;
                    cuttedWord.split('').forEach(el => {
                        sum += el.charCodeAt(0);
                    });
                    console.log(sum);
                } else {
                    console.log(`Invalid indices!`);
                }
            }


        }
    }
}
firstProblem([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
]);
console.log('-------------------------')
function problemTwo(input) {
    let word = input.shift();
    for (let el of input) {
        if (el === 'Finish') {
            break;
        }
        let [command, elOne, elTwo] = el.split(' ');
        switch (command) {
            case 'Replace':
                while (word.includes(elOne)) {
                    word = word.replace(elOne, elTwo);
                }
                console.log(word);
                break;
            case 'Cut':
                let start = +elOne;
                let end = +elTwo;
                if (
                    start >= 0 &&
                    start <= end &&
                    end < word.length
                ) {
                    let cutA = word.substring(0, start);
                    let cutB = word.substring(end + 1);
                    word = cutA + cutB;
                    console.log(cutA + cutB);
                } else {
                    console.log(`Invalid indices!`);
                }
                break;
            case 'Make':
                if (elOne === 'Upper') {
                    word = word.toUpperCase();
                } else if (elOne === 'Lower') {
                    word = word.toLowerCase();
                }
                console.log(word);
                break;
            case 'Check':
                if (word.includes(elOne)) {
                    console.log(`Message contains ${elOne}`);
                } else {
                    console.log(`Message doesn't contain ${elOne}`);
                }
                break;
            case 'Sum':
                let startInd = +elOne;
                let endInd = +elTwo;
                if (
                    startInd >= 0 &&
                    startInd <= endInd &&
                    endInd < word.length
                ) {
                    let cuttedWord = word.substring(startInd, endInd + 1);
                    let sum = 0;
                    cuttedWord.split('').forEach(el => {
                        sum += el.charCodeAt(0);
                    });
                    console.log(sum);
                } else {
                    console.log(`Invalid indices!`);
                }
                break;
        }
    }
}
problemTwo(['ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'])