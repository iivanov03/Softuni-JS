function deleteByEmail() {
        let input = document.getElementsByName('email')[0].value.trim();
        let trs = document.getElementsByTagName('tr');
        let deletedTr = '';
        let resultElement = document.getElementById('result');

        for (let tr of trs) {
            let emailTd = tr.children[1];
            if(emailTd.textContent === input){
                deletedTr = tr;
                resultElement.innerText = 'Deleted.';
                deletedTr.parentNode.removeChild(deletedTr);
                return;
            }
        }

       resultElement.textContent = 'Not found.'
    
}