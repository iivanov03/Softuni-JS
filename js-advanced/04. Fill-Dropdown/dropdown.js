function addItem() {
    let text = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue')
    let select = document.getElementById('menu');
    let option = document.createElement('option');

    option.value = valueInput.value;
    option.textContent = text.value;

    if(option.value.length > 0 && option.textContent.length > 0) {
        select.appendChild(option);
    }
    text.value = '';
    valueInput.value = '';

}