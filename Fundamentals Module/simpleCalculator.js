// let calculate = function(a, b, method) {
//     switch (method) {
//         case ('multiply'):
//             console.log(a * b);
//         case ('divide'):
//             console.log(a / b);
//         case ('add'):
//             console.log(a + b);
//         case ('subtract'):
//             console.log(a - b);
//     }
// }
// calculate(5, 5, 'multiply')

function calculate(a, b, method){
    switch (method){
        case ('multiply'):
            let multiply = (a, b) => a * b;
            console.log(multiply(a, b));
            break;
        case ('divide'):
            let divide = (a, b) => a / b;
            console.log(divide(a, b));
            break;
        case ('add'):
            let add = (a, b) => a + b;
            console.log(add(a, b));
            break;
        case ('subtract'):
            let subtract = (a, b) => a - b;
            console.log(subtract(a, b));
            break;
    }
}