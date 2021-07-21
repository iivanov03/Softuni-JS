function addItem() {
    let newItemTextEl = document.getElementById('newItemText');
    let liItemsElements = document.getElementById('items');

    let newListEl = document.createElement('li');
    newListEl.textContent = newItemTextEl.value;
    liItemsElements.appendChild(newListEl);
    newItemTextEl.value = '';
}                             