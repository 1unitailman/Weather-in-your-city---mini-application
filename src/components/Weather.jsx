import './Weather.css'

const Weather = () => { 
	return (
		<div className='weather'>
			<div className='search-bar'>
				<input type='text' placeholder='Search' />
				<img src='/src/assets/images/search.png' />
			</div>
			<img src='' className='weather-icon' />
			<p className='temp'>°C</p>
			<p className='location'></p>
			<div className='weather-data'>
				<div className='col'>
					<img src='/src/assets/images/humidity.png' alt='' />
					<div>
						<p>%</p>
						<span>Humidity</span>
					</div>
				</div>
				<div className='col'>
					<img src='/src/assets/images/wind.png' alt='' />
					<div>
						<p> km/h</p>
						<span>Wind speed</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather
