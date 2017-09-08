const express = require('express');
const hbs 	  = require('hbs');
const fs 	  = require('fs');
const port  = process.env.PORT || 3000;

var app 	= express();

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine','hbs');

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();	
});

hbs.registerHelper('StrinUpperCase', (string) => {
	return string.toUpperCase();
})



app.use((req, res, next )=>{
	var now = new Date().toString();
	var log = `${now}: ${req.method}  ${req.url}`;
	fs.appendFile('serever.log', log +'\n', (err)=>{
		if(err) {
			console.log('Unable to append Server.log.');
		}
	});
	next(); 
});

// app.use((req,res,next)=>{
// 	res.render('maintenance.hbs');
// })

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
	//res.send('Hello Express !');
	// res.send({
	// 	name: 'Vipul',
	// 	Likes: [
	// 		'Biking',
	// 		'Cities'
	// 	]
	// });

	res.render('home.hbs',{
		pageTitle:'Home Page',
		message:'Welcome to my First site'
	});
});


app.get('/about', (req,res) => {
	res.render('about.hbs',{
		pageTitle: 'About Us Page'
	});
});

app.get('/bad', (req,res) => {

	res.send({
		errorMessage: 'Unable to handle request'
	});
});


app.listen(port,() => {
	console.log(`Server is up on port ${port}`);
});

