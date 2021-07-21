function solve() {
    let infoSpanEl = document.querySelector('#info .info');
    let departInputButton = document.getElementById('depart');
    let arriveInputButton = document.getElementById('arrive');
    let idStop = 'depot';

    function depart() {

        if(infoSpanEl.getAttribute('nextStop') !== null){
            idStop = infoSpanEl.getAttribute('nextStop');
        }


        fetch(urlGetter(idStop))
            .then(response => response.json())
            .then(info => {
                infoSpanEl.setAttribute('stopNameDate', info.name);
                infoSpanEl.setAttribute('nextStop', info.next);
                infoSpanEl.textContent = `Next stop ${info.name}`;
                departInputButton.disabled = true;
                arriveInputButton.disabled = false;
            })
            .catch(error => {
                infoSpanEl.textContent = 'Error';
                departInputButton.disabled = true;
                arriveInputButton.disabled = true;
            })
        
        function urlGetter(stopId) {
            return `http://localhost:3030/jsonstore/bus/schedule/${stopId}`
        }
    }

    function arrive() {
        let stopName = infoSpanEl.getAttribute('stopNameDate');
        infoSpanEl.textContent = `Arriving at ${stopName}`;
        departInputButton.disabled = false;
        arriveInputButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();



//function solve() {
// 
//    function depart() {
//        let nextStopId = 'depot';
//        let stopInfoSpan = document.querySelector('#info .info');
//        let departButton = document.getElementById('depart');
//        let arriveButton = document.getElementById('arrive');
// 
//        console.log(stopInfoSpan.getAttribute('data-next-stop-id'))
//        if(stopInfoSpan.getAttribute('data-next-stop-id') !== null) {
//            nextStopId = stopInfoSpan.getAttribute('data-next-stop-id');
//        }
// 
//        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
//            .then(body => body.json())
//            .then(stopInfo => {
//                console.log(stopInfo);
//                stopInfoSpan.setAttribute('data-stop-name', stopInfo.name);
//                stopInfoSpan.setAttribute('data-next-stop-id', stopInfo.next);
//                stopInfoSpan.textContent = `Next stop ${stopInfo.name}`;
//                departButton.disabled = true;
//                arriveButton.disabled = false;
//            })
//            .catch(err => {
//                stopInfoSpan.textContent = `Error`;
//                departButton.disabled = true;
//                arriveButton.disabled = true;
//            })
//    }
// 
//    function arrive() {
//        let stopInfoSpan = document.querySelector('#info .info');
//        let departButton = document.getElementById('depart');
//        let arriveButton = document.getElementById('arrive');
//        let stopName = stopInfoSpan.getAttribute('data-stop-name');
//        stopInfoSpan.textContent = `Arriving at ${stopName}`;
//        departButton.disabled = false;
//        arriveButton.disabled = true;
//    }
// 
//    return {
//        depart,
//        arrive
//    };
//}
// 
//let result = solve();