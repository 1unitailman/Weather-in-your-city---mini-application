const WeatherData = ({ weatherData }) => {
	return (
		<div className='weather-data'>
			<img src={weatherData.icon} className='weather-icon' />
			<p className='temp'>{weatherData.temp}°C</p>
			<p className='location'>{weatherData.location}</p>
			<div className='grid'>
				<div className='col'>
					<img src='/src/assets/images/humidity.png' alt='humidity icon' />
					<div>
						<p>{weatherData.humidity}%</p>
						<span>Humidity</span>
					</div>
				</div>
				<div className='col'>
					<img src='/src/assets/images/wind.png' alt='wind icon' />
					<div>
						<p>{weatherData.windSpeed} km/h</p>
						<span>Wind Speed</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeatherData
