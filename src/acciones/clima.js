import axios from 'axios';

const API_KEY = 'a3de5cffde10c377d199699b3da6fc6f';
const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const FETCH_CLIMA = 'FETCH_CLIMA';

function fetchClima(ciudad) {
    const url = `${ROOT_URL}&q=${ciudad},mx`;
    const solicitud = axios.get(url);
    console.log('solicitud', solicitud);
    return {
        type: FETCH_CLIMA,
        objeto: solicitud
    };
}

export {FETCH_CLIMA, fetchClima};