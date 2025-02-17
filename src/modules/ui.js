const weatherContainer = document.querySelector(".weather-container");

export function display(weatherData) {
    const location = weatherData.resolvedAddress;
    const [city, state, country] = location.split(', ').map(part => part.trim());
    const temp = Math.floor(((weatherData.currentConditions.temp - 32) * 5) / 9);
    const humidity = weatherData.currentConditions.humidity;
    const windSpeed = weatherData.currentConditions.windspeed;
    const description = weatherData.description;
    
    weatherContainer.innerHTML = `
    <div class="location">
    <h1>${city}</h1>
    <h2>${state}, ${country}</h2>
    </div>
    <div class="description">
    <p>${description}</p>
    </div>
    <div class="details">
    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M520-520v-80h200v80H520Zm0-160v-80h320v80H520ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120ZM200-320h240q0-29-12.5-54T392-416l-32-24v-280q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v280l-32 24q-23 17-35.5 42T200-320Z"/></svg><h4>Temperature: ${temp}&deg C<h4></div>
    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"/></svg><h4>Humidity: ${humidity} %<h4></div>
    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/></svg><h4>Wind Speed: ${windSpeed} m/s<h4></div>
    </div>
    `
}