import axios from 'axios';

const API_KEY = 'cd9cfe60cec9b5c66f7681339214d3a7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // <--template string

export const FETCH_WEATHER = ' FETCH_WEATHER';
// Reducers will also reference this variable ^ .  This provides a single place to store theis action type which is used in multiple places.

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url); // returns a promise

  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request // React-promise intercepts this action before it gets to reducers, b/c it's a promise. It makes sure that the promise resolves and passes on the resolved promise to the reducers.
  };
}
