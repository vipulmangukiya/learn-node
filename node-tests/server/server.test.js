const request = require('supertest');

var app  = require('./server').app;

it('should retutn hello word reponse', (done) => {

	request(app)
		.get('/')
		.expect(200)
		.expect('Hi Vipul Mangukiya')
		.end(done);
});