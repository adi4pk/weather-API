
function loadWeather(city){
    fetch(`https://goweather.xyz/weather/${city}`)
    .then(data => data.json())
    .then(json => {
        let temp = json.temperature;
        let wind = json.wind;
        let desc = json.description;
        let forecast = json.forecast;
        console.log(temp);
        container.appendChild(createCard(temp, wind, city, desc, forecast));
    })
    .catch(err => {
        console.log(err);
    });

}




function createCard(temp, wind, city, desc, forecast){

    container.innerHTML = "";
    let card = document.createElement("div");
    card.classList.add("background");
    card.classList.add("container");
    card.innerHTML = `
            <h1 class="temp">${temp}</h1>
            <h3 class="wind">Wind: ${wind}</h3>
            <h1 class="city">${city}</h1>
            <h3 class="weather-type">Today's weather: ${desc}</h3>
            <div class="search-div">
                <input type="text" class="city-input">
                <button class="search-button">Search</button>
            </div>
            <ul class="forecast-div">
                <li class="day day1"><h2>tomorrow</h2>
                    <h1 class="temp">${forecast[0].temperature}</h1>
                    <h2 class="wind">${forecast[0].wind}</h2>
                </li>
                <li class="day day2">
                <h2>the day after tomorrow</h2>
                    <h1 class="temp">${forecast[1].temperature}</h1>
                    <h2 class="wind">${forecast[1].wind}</h2>
                </li>
                <li class="day day3">
                <h2>day3</h2>
                    <h1 class="temp">${forecast[2].temperature}</h1>
                    <h2 class="wind">${forecast[2].wind}</h2>
                </li>
            </ul>`;

    return card;
    
}