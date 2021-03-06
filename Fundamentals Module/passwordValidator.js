function passValidaztion(password){
    function passLength(str){
        if(str.length >= 6 && str.length <= 10){
            return '';
        } else{
            return `Password must be between 6 and 10 characters\n`;
        }
    }

    function onlyLettersDigits(str){
        let isLetterDigits = true;
        for (const char of str) {
            let code = char.charCodeAt();
            if ( code < 48 || code > 57 && code < 65 
                || code > 90 && code < 97 || code > 122){
                    isLetterDigits = false;
            }
        }
        return isLetterDigits ? '' : `Password must consist only of letters and digits\n`;
    }
    function twoDigits(str){
        let count = 0;
        for (const char of str) {
            let code = char.charCodeAt();
            if(code >= 48 && code <= 57){
                count++;
            }
        }
        if (count >= 2){
            return '';
        } else{
            return `Password must have at least 2 digits\n`
        }
    }

    let result = '';
    result = passLength(password) + onlyLettersDigits(password) + twoDigits(password);
    return result ? result : `Password is valid`
}