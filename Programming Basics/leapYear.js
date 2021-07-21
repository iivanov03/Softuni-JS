function solve(leapYear, endYear){
    leapYear = Number(leapYear);
    endYear = Number(endYear);
    for (let year = leapYear; year <= endYear; year += 4){
        console.log(year)
    }
}
solve("1908", "1919");