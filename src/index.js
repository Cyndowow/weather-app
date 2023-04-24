const submit = document.getElementById("submit");
submit.addEventListener("click", getCurrentData);

window.addEventListener("DOMContentLoaded", initalLoad());

async function getCurrentData(location) {
    try {
        location = getLocation();
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b17e082a2d9f4fffad193156232104&q=${location}`, {mode: "cors"});
        const weatherData = await response.json(); 
        const cityName = weatherData.location.name;
        const lastUpdate = weatherData.current.last_updated;
        const temperature = weatherData.current.temp_c;
        const feltTemp = weatherData.current.feelslike_c;
        const condition = weatherData.current.condition.text;
        const conditionPic = weatherData.current.condition.icon;
        console.log(weatherData);

        displayWeather(cityName, lastUpdate, temperature, feltTemp, condition, conditionPic);
    } catch(err) {
        console.log(err);
    }
}

function getLocation() {
    const search = document.getElementById("search");
    const location = search.value;

    if(location === "") {
        alert("Enter a location!");
    } else {
        return location;
    }
    search.value = "";

}

async function initalLoad() {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b17e082a2d9f4fffad193156232104&q=berlin`, {mode: "cors"});
    const weatherData = await response.json(); 
    const cityName = weatherData.location.name;
    const lastUpdate = weatherData.current.last_updated;
    const temperature = weatherData.current.temp_c;
    const feltTemp = weatherData.current.feelslike_c;
    const condition = weatherData.current.condition.text;
    const conditionPic = weatherData.current.condition.icon;

    displayWeather(cityName, lastUpdate, temperature, feltTemp, condition, conditionPic);
}

function displayWeather(cityName, update, temp, feltTemp, condition, conditionPic) {
    
    const content = document.getElementById("content");
    content.innerHTML = "";

    const top = document.createElement("div");
    const name = document.createElement("p");
    const img = document.createElement("img");
    img.classList.add("img");
    top.classList.add("top");
    name.classList.add("name");
    name.textContent = cityName;
    img.src = `https://${conditionPic.slice(2)}`;
    top.appendChild(name);
    top.appendChild(img);

    const mid = document.createElement("div");
    mid.classList.add("mid");
    mid.textContent = condition;

    const data = document.createElement("div");
    data.classList.add("data");
    
    const temperatures = document.createElement("div");
    temperatures.classList.add("temperatures");

    const tempCContainer = document.createElement("div");

    const tempCText = document.createElement("p");
    tempCText.classList.add("temp_c_text");
    tempCText.textContent = "Temperature:";

    const tempC = document.createElement("p");
    tempC.classList.add("temp_c");
    tempC.textContent = temp;

    tempCContainer.appendChild(tempCText);
    tempCContainer.appendChild(tempC);

    const tempFeltContainer = document.createElement("div");
    tempFeltContainer.classList.add("temp_felt_container");

    const tempFeltText = document.createElement("p");
    tempFeltText.classList.add("temp_felt_text");
    tempFeltText.textContent = "Felt Temperature:";

    const tempFelt = document.createElement("p");
    tempFelt.classList.add("temp_felt");
    tempFelt.textContent = feltTemp;

    tempFeltContainer.appendChild(tempFeltText);
    tempFeltContainer.appendChild(tempFelt);

    const bottom = document.createElement("div");
    bottom.classList.add("bottom");
    bottom.textContent = update;

    temperatures.appendChild(tempCContainer);
    temperatures.appendChild(tempFeltContainer);
    data.appendChild(temperatures);
    data.appendChild(bottom);

    content.appendChild(top);
    content.appendChild(mid);
    content.appendChild(data);
}