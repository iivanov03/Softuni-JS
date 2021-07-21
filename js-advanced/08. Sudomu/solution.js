function solve() {
    let buttons = document.querySelectorAll('#exercise tfoot button');
    let checkButton = buttons[0];
    let clearButton = buttons[1];
    
    
    checkButton.addEventListener('click', checkBoard);

    function checkBoard() {
        let tableRows = Array
        .from(document.querySelectorAll('#exercise tbody tr'))
        .map(row => row.querySelectorAll('input'))
        .map(x => Number(x.value));


    }

    function isValidSudoku(){
        for(let row = 0; row < Rows)
    }
}