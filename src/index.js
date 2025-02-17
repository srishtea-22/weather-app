import './styles.css';
import { fetchData } from "./modules/api";
import { display } from './modules/ui';

const searchBtn = document.getElementById("searchBtn");
const dafaultLocation = "Delhi";

async function getWeather(location) {
    const weatherData = await fetchData(location);
    display(weatherData);
}

document.addEventListener("DOMContentLoaded", () => {
    getWeather(dafaultLocation);
});

searchBtn.addEventListener("click", function() {
    const userInput = document.querySelector(".search-bar input").value.trim();
    const location = userInput || defaultLocation;
    getWeather(location);
})
