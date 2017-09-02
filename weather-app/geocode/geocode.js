const request = require('request');


var geocodeAddress = (address ,callback)=>{

	var encodeAddress = encodeURIComponent(address);
	request({
		url: `http://maps.google.com/maps/api/geocode/json?address=${encodeAddress}`,
		json: true
	}, (error,response,body)=>{
	
		// console.log(JSON.stringify(response, undefined, 2));
		if( error ) {

			callback('Unable to connect to Google Servers.');
			
		} else if(body.status === 'ZERO_RESULTS') {
			callback('Unable to find that address.');
		} else if(body.status === 'OK') {
			callback(undefined, {
				Address  : body.results[0].formatted_address,
				Latitude : body.results[0].geometry.location.lat,
				Longitude: body.results[0].geometry.location.lng
			});
		}
	});
};

module.exports = {
	geocodeAddress
};