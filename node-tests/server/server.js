const express = require('express');

var app = express();


app.get('/', (req,res) => {

	res.send('Hi Vipul Mangukiya');

});

app.listen(3000);

module.exports.app = app;