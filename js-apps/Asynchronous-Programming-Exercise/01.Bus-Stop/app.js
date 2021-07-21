function getInfo() {
    let inputEl = document.getElementById('stopId');
    let id = inputEl.value;
    let nameDivEl = document.getElementById('stopName');
    let busesUl = document.getElementById('buses');

    fetch(urlGetter(id))
        .then(response => response.json())
        .then(info => {
            nameDivEl.textContent = info.name;
            Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());

            for (const [key, value] of Object.entries(info.buses)) {
                let busLi = document.createElement('li');
                busLi.textContent = `Bus ${key} arrives in ${value}`;
                busesUl.appendChild(busLi);
            }   
        })
        .catch(error => {
            nameDivEl.textContent = 'Error';
            Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());
        })

    function urlGetter(busId){
        return `http://localhost:3030/jsonstore/bus/businfo/${busId}`;
    }
}