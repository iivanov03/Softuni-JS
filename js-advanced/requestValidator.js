function solve(httpObj){
    validateMessage(httpObj);
    validVersion(httpObj);
    validUrl(httpObj);
    validMethod(httpObj);

    return httpObj;
    
    function validateMessage(){
        let propName = 'message';
        let messageReg = /^[^<>\\&'"]*$/;

        if(httpObj[propName] === undefined ||
            !messageReg.test(httpObj[propName])){
                throw new Error('Invalid request header: Invalid Message');
            }
        }
    
    function validVersion(httpObj){
        let propName = 'version';
        let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if(httpObj[propName] === undefined ||
            !validVersion.includes(httpObj[propName])){
                throw new Error('Invalid request header: Invalid Version')
        }
    }

    function validUrl(httpObj){
        let propName = 'uri';
        let urlReg = /^\*$|^[a-zA-Z0-9.]+$/;
        
        if(httpObj[propName] === undefined ||
            !urlReg.test(httpObj[propName])){
                throw new Error('Invalid request header: Invalid URL')
        }
    }
    
    
    function validMethod(httpObj){
        let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let propName = 'method';

        if(httpObj[propName] === undefined ||
            !validMethod.includes(httpObj[propName])){
                throw new Error('Invalid request header: Invalid Method')
        }
    }
}

console.log(solve({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
    }));
      