function loadingBar(n){
    function fullRow(n){
        return '%'.repeat(n/10);
    }
    function emptyRow(n){
        return '.'.repeat((100-n)/10);
    }

    let result = '';

    if(n === 100){
        console.log(`${n}% Complete!\n[${fullRow(n)}]`);
    } else{
        console.log(`${n}% [${fullRow(n)}${emptyRow(n)}]\nStill loading...`)
    }
}
loadingBar(100);
loadingBar(50);