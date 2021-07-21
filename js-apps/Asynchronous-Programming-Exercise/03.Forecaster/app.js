function attachEvents() {
    let locationInput = document.getElementById('location');
    let weatherButton = document.getElementById('submit');
    let forecastItem = document.getElementById('forecast');
    let currForecast = document.getElementById('current');
    let upcomingForecast = document.getElementById('upcoming');
 
    let symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    };
    
    
    weatherButton.addEventListener('click', () => {
        Array.from(currForecast.querySelectorAll('div')).forEach((el, i) => {
            i !== 0 ? el.remove() : el;
        })
        Array.from(upcomingForecast.querySelectorAll('div')).forEach((el, i) => {
            i !== 0 ? el.remove() : el;
        })
        fetch(`http://localhost:3030/jsonstore/forecaster/locations/`)
            .then(response => response.json())
            .then(data => {
                let match = data.find(l => l.name.toLowerCase() === locationInput.value.toLowerCase()).code;
 
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${match}`)
                    .then(response => response.json())
                    .then(data => {
                        forecastItem.style.display = 'block';
 
                        let currDivForecast = document.createElement('div');
                        currDivForecast.classList.add('forecasts');
                        currDivForecast.innerHTML += `<span class="condition symbol">${symbols[data.forecast.condition]}</span>`;
 
                        let weatherDataSpan = document.createElement('span');
                        weatherDataSpan.classList.add('condition');
 
                        weatherDataSpan.innerHTML += `<span class="forecast-data">${data.name}</span>`;
                        weatherDataSpan.innerHTML += `<span class ="forecast-data">${data.forecast.low}${symbols['Degrees']}/${data.forecast.high}${symbols['Degrees']}</span>`;
                        weatherDataSpan.innerHTML += `<span class="forecast-data">${data.forecast.condition}</span>`;
 
                        currDivForecast.appendChild(weatherDataSpan);
                        currForecast.appendChild(currDivForecast);
                    });
 
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${match}`)
                    .then(response => response.json())
                    .then(data => {
                        let upcomingForDiv = document.createElement('div');
                        upcomingForDiv.classList.add('forecast-info');
 
                        data.forecast.map(x => {
                            let spanData = document.createElement('span');
                            spanData.classList.add('upcoming');
                            spanData.innerHTML += `<span class="symbol">${symbols[x.condition]}</span>`;
                            spanData.innerHTML += `<span class="forecast-data">${x.low}${symbols['Degrees']}/${x.high}${symbols['Degrees']}</span>`;
                            spanData.innerHTML += `<span class="forecast-data">${x.condition}</span>`;
                            upcomingForDiv.appendChild(spanData);
                        });
 
                        upcomingForecast.appendChild(upcomingForDiv);
                    });
 
            }).catch(err => {
                let errorDiv = document.createElement('div');
                errorDiv.classList.add('label');
                errorDiv.textContent = 'Error';
                currForecast.appendChild(errorDiv);
            });
    });
}
attachEvents();





//function attachEvents() {
//    let submitButton = document.getElementById('submit');
//
//    submitButton.addEventListener('click', weatherHandler)
//
//}
//
//attachEvents();
//
//
//async function weatherHandler(){
//    let locationInput = document.getElementById('location');
//    let cityName = locationInput.value;
//
//     let code = await codeHandler(cityName);
//
//     let [currentWeather, upcomingWeather] = await Promise.all([
//         getTodayWeather(code),
//         getUpcomingWeather(code)
//     ])  
//}
//
//async function codeHandler(cityName){
//    let url = 'http://localhost:3030/jsonstore/forecaster/locations'
//    const response = await fetch(url);
//    const returnData = await response.json();
//    return returnData.find(json => json.name.toLowerCase() === cityName.toLowerCase()).code;
//}
//
//async function getTodayWeather(code){
//    let url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
//    const response = await fetch(url);
//    const returnData = await response.json();
//    return returnData;
//}
//
//async function getUpcomingWeather(code){
//    let url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
//    const response = await fetch(url);
//    const returnData = await response.json();
//    return returnData;
//}

