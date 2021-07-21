function solve(num){
    
    for(let i = 1; i <= num; i++){
        let line = i += ' ';
        console.log(line.repeat(i));
    }
}

function solve2(num){
        for(let y = 1; y <= 10; y++){
            let product = num * y;
            console.log(`${num} X ${y} = ${product}`)
        }
} 


function solve5(arr){
    let username = arr.shift();
    let pass = username.split('').reverse().join('');

    for(let i = 0; i < arr.length; i++){
        if(i >= 3){
            console.log(`User ${username} blocked!`);
            break;
        }
        if (arr[i] === pass){
            console.log(`User ${username} logged in.`);
        } else {
            console.log(`Incorrect password. Try again.`);
        }
    }
}
solve5(['Acer','login','go','let me in','recA'])