const request = require('request');


var getWeather = (lng,lat,callback ) => {

	request({
		url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,
		json: true
	},(error, response, body)=>{
		if(!error && response.statusCode ===200 ) {
			callback(undefined, {
				Temperature        : body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} 
		else {

			callback('Unable to connect to Forecast.io server');
		}
	});
};



module.exports = {
	getWeather
};