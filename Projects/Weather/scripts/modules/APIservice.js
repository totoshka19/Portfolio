const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '6688a3e64e69f87386caee3ad466e5a9';

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
        if (!response.ok || response.status === 404) {
            throw new Error("Ошибка запроса");
        }
        const data = await response.json();
        return {success: true, data};
    } catch (err) {
        return {success: false, err};
    }
}
