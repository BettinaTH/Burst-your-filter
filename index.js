const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf');

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

/// MOVIE BY YEAR
// var request = require("request");

// var options = { method: 'GET',
//   url: 'https://api.themoviedb.org/3/discover/movie',
//   qs: 
//    { 'primary_release_date.lte': '1982',
//      page: '1',
//      include_video: 'false',
//      include_adult: 'false',
//      sort_by: 'popularity.desc',
//      language: 'en-US',
//      api_key: 'hgjdjjrnbjgkjrjvkigtjdkgkit' },
//   body: '{}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

/// MOVIE BY NOT GENRE
// var request = require("request");

// var options = { method: 'GET',
//   url: 'https://api.themoviedb.org/3/discover/movie',
//   qs: 
//    { without_genres: 'crime',
//      'primary_release_date.lte': '1982',
//      page: '1',
//      include_video: 'false',
//      include_adult: 'false',
//      sort_by: 'popularity.desc',
//      api_key: 'sdkjfhdkjshfdskjhf' },
//   body: '{}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });




/////// LAST ROUTE ////
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
