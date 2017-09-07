
const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			discribe: 'Address to fetch weather for',
			string: true
		}
	})
	  .help()
	  .alias('help','h')
	  .argv;


var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.google.com/maps/api/geocode/json?address=${encodeAddress}`;


axios.get(geocodeUrl).then((response) => {

	if(response.data.status === 'ZERO_RESULTS') {
		throw new Error ('Unable to find that address.');
	}

	var lat 		= response.data.results[0].geometry.location.lat;
	var lng 		= response.data.results[0].geometry.location.lng;
	var weatherUrl  = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`;
	
	console.log('Location:',response.data.results[0].formatted_address);
	return axios.get(weatherUrl); // nested axios call 
}).then((response) => {

	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;

	console.log(`Weather Are : It's currently ${temperature}. It feels like ${apparentTemperature} `);

}).catch((e) => {

	if(e.code === 'ENOTFOUND') {
		console.log('Unable to Connect API Servers.');
	} else {
		console.log(e.message);
	}
});


