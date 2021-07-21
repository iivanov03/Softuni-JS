function addItem() {
    let newItemTextEl = document.getElementById('newItemText');
    let liItemsElements = document.getElementById('items');

    let newListEl = document.createElement('li');
    newListEl.textContent = newItemTextEl.value;

    let deleteButtonEl = document.createElement('a');
    deleteButtonEl.setAttribute('href', '#');
    deleteButtonEl.textContent = '[Delete]';

    deleteButtonEl.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })

    newListEl.appendChild(deleteButtonEl);
    liItemsElements.appendChild(newListEl);
    newItemTextEl.value = '';
    
}