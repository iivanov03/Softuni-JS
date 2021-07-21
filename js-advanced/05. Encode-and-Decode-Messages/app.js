function encodeAndDecodeMessages() {
    let firstTextArea = document.querySelectorAll('textarea')[0];
    let secondTextArea = document.querySelectorAll('textarea')[1];
    let firstButton = document.querySelectorAll('button')[0];
    let secondButton = document.querySelectorAll('button')[1];

    firstButton.addEventListener('click', () => {
        secondTextArea.value = decoder(firstTextArea.value, 1);
        firstTextArea.value = '';
    });

    secondButton.addEventListener('click', () => {
        secondTextArea.value = decoder(secondTextArea.value, -1);
    });

    function decoder(text, code){
        let decodeMessage = '';
        for (let i = 0; i < text.length; i++) {
            decodeMessage += `${String.fromCharCode(text.charCodeAt(i) + code)}`;
        }
        return decodeMessage;
    }
}