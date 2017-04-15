/* Scraping Dependencies */
var request = require('request');
var cheerio = require('cheerio');

/* Normal Dependencies */
var express = require('express');
var bodyparser = require('body-parser');
var logger = require('logger');
var mongoose = require('mongoose');

/* Initialize Express server */
var app = express

/* Use Body-Parser */
app.use(bodyParser.urlencoded({
    extended: false
}));

/* Mongoose database config */
mongoose.connect("mongodb://heroku_qtrccn2t:2aoqstqnimimrk1vcc5d0d8m07@ds161640.mlab.com:61640/heroku_qtrccn2t");
var db = mongoose.connection;

/* Catch mongoose errors */
db.on("error", (error) => {
    console.log("Mongoose Error: ", error);
});

/* Log successful database connection */
db.once("open", () => {
    console.log("Mongoose connection successful!");
});


/* Set up routes for scraping */

request('http://www.espn.com/nba/', (err, res, html) => {

    /* Load the HTML into cheerio, $ => selector command */
    var $ = cheerio.load(html);

    $('article h1').each((i, element) => {

        /* Push the HTML scraped into a js object */
        var results = {};


    })

});