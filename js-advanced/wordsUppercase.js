function solve(input){
    let words = input.toUpperCase().split(/[\W+]/).filter(word => word.length > 0).join(', ');
    console.log(words);
}
solve('Hi, how are you?');