function solve(bookPages, readPagesPerHour, days){
    bookPages = Number(bookPages);
    readPagesPerHour = Number(readPagesPerHour);
    days = Number(days);

    let fullTime = bookPages / readPagesPerHour;
    let result = fullTime / days;
    console.log(result);
}
solve("212", "20", "2")