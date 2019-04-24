const express = require('express');
const app = express();
const tmdb = require('./secrets');
const key = tmdb.api_key;


exports.moviesByYear = function moviesByYear(year){
    app.get('https://api.themoviedb.org/3/discover/movie?api_key=' + key +'&sort_by=revenue.desc&include_adult=true&language=en-US&primary_release_date.lte=' + year)
}

exports.test = function test(){
app.get('https://api.themoviedb.org/3/discover/movie?api_key=77da04c403c5708cfdf55c397aabb35c&language=en-US&sort_by=popularity.desc&certification.lte=1992&include_adult=false&include_video=false&page=1')
}