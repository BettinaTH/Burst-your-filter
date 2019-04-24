const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const tmdb = require('./secrets');
const key = tmdb.api_key;
const axios = require('axios');
//var https = require("https");
const moviesByYear = 'https://api.themoviedb.org/3/discover/movie?api_key=' + key +'&sort_by=revenue.desc&include_adult=true&language=en-US&primary_release_date.lte='
// const TestURL = 'https://api.themoviedb.org/3/discover/movie?api_key=77da04c403c5708cfdf55c397aabb35c&language=en-US&sort_by=popularity.desc&certification.lte=1992&include_adult=false&include_video=false&page=1'

const tmdbUrl = require('./tmdb')


app.use(compression());
app.use(bodyParser.json());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(
    express.static('./public')
);

app.use(cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 14 // Cookies lasts 2 weeks
}));

app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

/// REQUEST TO MOVIEDATABASE


app.get('/get-movie-by-year', async (req, res) => {
    const byYear = await axios.get(moviesByYear + req.query.year)
    console.log(req.query.year)
    console.log(byYear)
    res.json(byYear.data);
    console.log('data in get by year: ',byYear.data)
 })






/////// LAST ROUTE ////
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
