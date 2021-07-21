function solve(text){
    let words = 0;
    for(index = 0; index < text.length; index++){
        let current = text[index];

        if(current === " "){
            words++
        }
    }
    words++
    if(words > 10){
        console.log(`The message is too long to be send! Has ${words} words.`);
    }else {
        console.log(`The message was send successfully!`);
    }
}
solve(`This message has exactly eleven words. One more as it's allowed!`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}