function focused() {
    let allInputs = document.querySelectorAll('input');
    for (const input of allInputs) {
        input.addEventListener('focus', blur);
        input.addEventListener('blur', focus);
    }
    function blur(){
        this.parentNode.className ='focus'     
        this.parentNode.className ='focused' 
    }

    function focus(){
        this.parentNode.className ='' 
    }
}