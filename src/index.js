import './styles.css';
import { fetchData } from "./modules/api";
import { display } from './modules/ui';

const dafaultLocation = "Delhi";
const searchInput = document.querySelector(".search-bar input");
async function getWeather(location) {
    const weatherData = await fetchData(location);
    display(weatherData);
}

document.addEventListener("DOMContentLoaded", () => {
    getWeather(dafaultLocation);
});

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        const userInput = searchInput.value.trim();
        const location = userInput || defaultLocation;
        getWeather(location);
    }
});
