const weatherApiKey = "EJPTQMJK4FKJL4HBSDHYLG6QP";
const giphyApiKey = "5HSR7wiLFbiODi5mYlMILV42shJUzBhw";

export async function fetchData(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weatherApiKey}`);
    return await response.json();  
}

export async function fetchGif(icon) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${icon}'`, {mode: 'cors'});
    const gif =  await response.json();
    return gif.data.images.original.url;
}