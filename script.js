const  weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "ef242fa399e3e1931b7554d3dd99673a";

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{

            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }
        catch(error){
            console.error(error);
            displayError("An error occurred while fetching the weather data. Please try again later.");
        }

    }
    else{
        displayError("Please enter a city name")
    }

})
async function getWeatherData(city){
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok){
        throw new Error("An error occurred while fetching the weather data. Please try again later.");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    const {name: city,
             main: {temp, humidity}, 
             weather:[{description,id}]} = data;
    
            card.textContent = "";
            card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);

    tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(1)}°C`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");
    card.appendChild(descDisplay);

    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add("weatherEmoji");
    card.appendChild(weatherEmoji);
    
}

function getWeatherEmoji(weatherId){

    if(weatherId >= 200 && weatherId < 300){
        return "⛈️";
    }
    if(weatherId >= 300 && weatherId < 600){
        return "🌧️";
    }
    if(weatherId >= 600 && weatherId < 700){
        return "❄️";
    }
    if(weatherId >= 700 && weatherId < 800){
        return "🌫️";
    }
    if(weatherId === 800){
        return "☀️";
    }
    if(weatherId > 800){
        return "☁️";
    }
    return "";

}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
