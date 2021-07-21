// function secretChat(input) {
//     let chat = input.shift();
//     for (let line of input) {
//         if (line !== 'Reveal') {
//             let [command, ...args] = line.split(':|:');
//             if (command === 'InsertSpace') {
//                 let index = Number(args);
//                 chat = chat.substring(0, index) + ' ' + chat.substring(index);
//                 console.log(chat);
//             } else if (command === 'Reverse') {
//                 let first = args;
//                 if (chat.includes(args)) {
//                     let index = chat.indexOf(first)
//                     chat = chat.slice(0, index) + chat.slice(index + first.length,)
//                     chat += [...first].reverse().join('')
//                     console.log(chat)
//                 } else {
//                     console.log('error')
//                 }
//             }
//             else if (command === 'ChangeAll') {
//                 let [subStr, replacement] = args;

//                 subStr = subStr.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
//                 let pattern = new RegExp(subStr, 'g');
//                 chat = chat.replace(pattern, replacement);
//                 console.log(chat);
//             }




//         }
//     }
//     console.log(`You have a new text message: ${chat}`)
// }



// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]
// );
function secretChat(input) {
    let message = input.shift();

for (const line of input) {
    let [command, ...args] = line.split(':|:');
    if(command === 'Reveal'){
        break;
    }
    if (command === 'ChangeAll') {
        chagne(args[0], args[1])
    } else if (command === 'Reverse') {
        rev(args[0])
    } else if (command === 'InsertSpace') {
        space(args[0])
    }
}

function chagne(letterToReplace, letter) {
    for (let i = 0; i < message.length; i++) {
        message = message.replace(letterToReplace, letter)
    }
    console.log(message);
}

function rev(first) {
    if (message.includes(first)) {
        let index = message.indexOf(first)
        message = message.slice(0, index) + message.slice(index + first.length, )
        message += [...first].reverse().join('')
        console.log(message)
    } else {
        console.log('error')
    }
}

function space(index) {
    message = message.split('')
    let a = message.splice(index,0,' ')
    message = message.join('')
    console.log(message);
}
console.log(`You have a new text message: ${message}`) ;
}
 secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
 ]);
