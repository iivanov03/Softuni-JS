function theImitationGame(input) {
    
    
    let words = input.shift();
    
    for (let line of input) {
        if(line !== 'Decode'){
        let [command, ...token] = line.split("|");
        
        if (command == "Move") {

            let num = Number(token[0]);
            let newWord = words.substr(0, num);
            words = words.split('').slice(num);
            words.push(newWord);
            words = words.join('');
        } else if (command == "Insert") {
           let [index, value] = token;
           index = Number(index);
           words = words.split('');
           words.splice(index, 0, value);
           words = words.join('');
           
       }  else if (command == "ChangeAll") {

            let [subStr, replacement] = token;
            

            subStr = subStr.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
            let pattern = new RegExp(subStr, 'g');
            words = words.replace(pattern, replacement);
            

        }

       
    }
}

    console.log(`The decrypted message is: ${words}`)

}

theImitationGame(
    [
        'zzHe',
        'ChangeAll|z|l',
        'Insert|2|o',
        'Move|3',
        'Decode'
    ]
);

