import { useEffect, useState } from 'react'
import './Weather.css'

const Weather = () => {
	const [weatherData, setWeatherData] = useState(false)

	const allIcons = {
		'01d': '/src/assets/images/clear.png',
		'01n': 'https://openweathermap.org/img/wn/01n@2x.png',
		'02d': '/src/assets/images/cloud.png',
		'02n': 'https://openweathermap.org/img/wn/02n@2x.png',
		'03d': 'https://openweathermap.org/img/wn/03d@2x.png',
		'03n': 'https://openweathermap.org/img/wn/03n@2x.png',
		'04d': 'https://openweathermap.org/img/wn/04d@2x.png',
		'04n': 'https://openweathermap.org/img/wn/04n@2x.png',
		'09d': '/src/assets/images/rain.png',
		'09n': 'https://openweathermap.org/img/wn/09n@2x.png',
		'10d': 'https://openweathermap.org/img/wn/10d@2x.png',
		'10n': 'https://openweathermap.org/img/wn/10n@2x.png',
		'11d': 'https://openweathermap.org/img/wn/10d@2x.png',
		'11n': 'https://openweathermap.org/img/wn/11n@2x.png',
		'13d': '/src/assets/images/snow.png',
		'13n': '/src/assets/images/snow.png',
		'50d': '/src/assets/images/humidity.png',
		'50n': '/src/assets/images/humidity.png',
	}

	const fetchWeather = async (city) => {
		const apiKey = import.meta.env.VITE_API_KEY

		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
		)
		const data = await res.json()
		console.log(data)

		const icon = allIcons[data.weather[0].icon]

		setWeatherData({
			temp: Math.floor(data.main.temp),
			location: data.name,
			icon: icon,
			humidity: data.main.humidity,
			windSpeed: data.wind.speed
		})
	}

	useEffect(() => {
		fetchWeather('Kharkiv')
	}, [])

	return (
		<div className='weather'>
			<div className='search-bar'>
				<input type='text' placeholder='Search' />
				<img src='/src/assets/images/search.png' />
			</div>
			<img src={weatherData.icon} className='weather-icon' />
			<p className='temp'>{weatherData.temp}°C</p>
			<p className='location'>{weatherData.location}</p>
			<div className='weather-data'>
				<div className='col'>
					<img src='/src/assets/images/humidity.png' alt='' />
					<div>
						<p>{weatherData.humidity}%</p>
						<span>Humidity</span>
					</div>
				</div>
				<div className='col'>
					<img src='/src/assets/images/wind.png' alt='' />
					<div>
						<p>{weatherData.windSpeed}km/h</p>
						<span>Wind speed</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather
