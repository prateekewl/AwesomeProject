const rootUrl = 'http://samples.openweathermap.org/data/2.5/weather?appid=abb6538727de1426ab02e38f0531fae7'

export const fetchWeather = (lat,lon) => {
	const url = rootUrl= '&lat='+lat+"&lon="+lon
	console.log(url)

	return fetch(url)
		.then(res => res.json())
		.then(json => ({
			temp: json.main.temp,
			weather: json.weather[0].main
	}))
}