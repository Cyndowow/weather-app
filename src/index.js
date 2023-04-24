async function getCurrentData() {
    try {
        const content = document.getElementById("content");
        content.innerHTML = "";
        const location = document.getElementById("location");
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b17e082a2d9f4fffad193156232104&q=${location.value}`, {mode: "cors"});
        const weatherData = await response.json(); 
        const cityName = weatherData.location.name;
        const lastUpdate = weatherData.current.last_updated;
        const temperature = weatherData.current.temp_c;
        const feltTemp = weatherData.current.feelslike_c;
        const condition = weatherData.current.condition.text;
        const conditionPic = weatherData.current.condition.icon;
        console.log(weatherData);


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

        const data = document.createElement("div");
        data.classList.add("data");
        
        const temperatures = document.createElement("div");
        temperatures.classList.add("temperatures");
        const tempC = document.createElement("div");
        tempC.classList.add("temp_c");
        tempC.textContent = temperature;

        const tempFelt = document.createElement("div");
        tempFelt.classList.add("temp_felt");
        tempFelt.textContent = feltTemp;

        const bottom = document.createElement("div");
        bottom.classList.add("bottom");
        bottom.textContent = lastUpdate;

        temperatures.appendChild(tempC);
        temperatures.appendChild(tempFelt);
        data.appendChild(temperatures);
        data.appendChild(bottom);

        content.appendChild(top);
        content.appendChild(data);




        location.value = "";
    } catch(err) {
        console.log(err);
    }
}


const submit = document.getElementById("submit");
submit.addEventListener("click", getCurrentData);