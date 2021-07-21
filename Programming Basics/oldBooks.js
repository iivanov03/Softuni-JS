function solve(input){
    let index = 0
    let favBook = input[index++];
    let currentBook = input[index++];
    let isfound = false;
    let checkedBook = 0;

    while (currentBook !== "No More Books"){

        if(currentBook === favBook){
            isfound = true;
            break;
        }
        checkedBook++;
        currentBook = input[index++];
    }
    if(isfound){
        console.log(`You checked ${checkedBook} books and found it.`)
    }else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBook} books.`)
    }
}
solve(["Troy",
"Stronger",
"Life Style",
"Troy"])
