import axios from 'axios';

const API_KEY = '71132c5ecb4114839b7271301ae9a25e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const  FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}