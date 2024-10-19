
import { useEffect, useRef, useState } from 'react'

import { fetchWeather } from '../services/WeatherService'
import SearchBar from './SearchBar'
import WeatherData from './WeatherData'

import '../styles/Weather.css'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Weather = () => {
	const inputRef = useRef()
	const [weatherData, setWeatherData] = useState(false)

	const handleFetchWeather = async (city) => {
		if (!city) {
			return toast.error('Error! Please enter the city name.')
		}
		const data = await fetchWeather(city)
		setWeatherData(data)
	}

	useEffect(() => {
		handleFetchWeather('Kharkiv')
	}, [])

	return (
		<div className='weather'>
			<SearchBar
				inputRef={inputRef}
				onSearch={() => handleFetchWeather(inputRef.current.value)}
			/>
			{weatherData && (
				<>
					<WeatherData weatherData={weatherData} />
				</>
			)}
			<ToastContainer />
		</div>
	)
}

export default Weather