import axios from "axios"
import { API_KEY, BASE_URL } from "./constant"

export const searchWeather = async (location) => {
    try {
        const response = axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
        const data = (await response).data
        data.visibility /= 1000
        data.visibility = data.visibility.toFixed(2)
        data.main.temp -= 273.15 // Konversi Kelvin ke Celcius
        data.main.temp = data.main.temp.toFixed(2)
        return data;

    } catch (error) {
        console.log(error);
        throw error
    }
}