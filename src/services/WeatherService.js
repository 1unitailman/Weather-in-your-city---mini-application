import { allIcons } from '../components/Icons';

export const fetchWeather = async (city) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  const data = await response.json();
  
  const icon = allIcons[data.weather[0].icon];

  return {
    temp: Math.floor(data.main.temp),
    location: data.name,
    icon,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
};