const apiKey = "EJPTQMJK4FKJL4HBSDHYLG6QP";

export async function fetchData(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`);
    return await response.json();  
}