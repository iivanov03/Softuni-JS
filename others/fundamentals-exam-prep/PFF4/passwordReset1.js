function passReset(input) {
    let pass = input.shift();

    for (let line of input) {
        if(line !== 'Done'){
            let [command, ...tokens] = line.split(' ');
            if(command === 'TakeOdd'){
                pass = pass.split('')
                    .filter((s , i) => i % 2 !== 0)
                    .join('');
            console.log(pass);
            } else if(command === 'Cut'){
                let index = Number(tokens[0]);
                let length = Number(tokens[1]);
                let substr = pass.substr(index, length);
                pass = pass.replace(substr, '');
                console.log(pass);
            } else if(command === 'Substitute'){
                let [substring, substitude] = tokens;
                if(pass.includes(substring)){
                    pass = pass.replace(new RegExp(`${substring}`, 'g'), substitude);
                    console.log(pass);
                } else {
                    console.log(`Nothing to replace!`)
                }
                
                
            }
        }
    }
    console.log(`Your password is: ${pass}`);
}
passReset(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done']
)