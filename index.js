const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
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

app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

/////// LAST ROUTE ////
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
