const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const tmdb = require('./secrets');
const key = tmdb.api_key;
const axios = require('axios');

const moviesByYear = 'https://api.themoviedb.org/3/discover/movie?api_key=' + key +'&sort_by=revenue.desc&include_adult=true&language=en-US&primary_release_date.lte=';
const moviesByGenre = 'https://api.themoviedb.org/3/discover/movie?api_key=' + key + '&sort_by=vote_count.desc&include_adult=true&language=en-US&without_genres=';
const movieOverview1 = 'https://api.themoviedb.org/3/movie/';
const movieOverview2 = "?api_key=" + key + "&language=en-US"



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
    maxAge: 1000 * 60 * 60 * 24 * 14
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


app.get('/get-movie-by-year', async (req, res) => {
    const byYear = await axios.get(moviesByYear + req.query.year);
    res.json({movies: byYear.data});
});

app.get('/movie-by-genre', async (req, res) =>{
    const byGenre = await axios.get(moviesByGenre + req.query.list);
    res.json({movies: byGenre.data});
});

app.get('/movie-detail', async (req, res) =>{
    const overview = await axios.get(movieOverview1 + req.query.id + movieOverview2);
    res.json({movies: overview.data});
    console.log('movies: overview.data: ', overview.data);
});


/////// LAST ROUTE ////
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8085, function() {
    console.log("I'm listening at 8085.");
});
