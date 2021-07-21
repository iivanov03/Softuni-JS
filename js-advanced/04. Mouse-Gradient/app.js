function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient')
    let textBox = document.getElementById('result')
    gradientBox.addEventListener('mousemove', gradientIn);
    gradientBox.addEventListener('mouseout', gradientOut);
    function gradientIn(){
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        textBox.textContent = power + '%';
    }
    function gradientOut(){
        textBox.textContent = '';
    }
}
