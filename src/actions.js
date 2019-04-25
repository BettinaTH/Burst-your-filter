import axios from './axios';


export async function receiveMoviesByYear(year){

    const {data} = await axios.get('/get-movie-by-year?year=' + year );
    return {
        type: 'RECEIVE_MOVIES_YEAR',
        yearList: data.movies.results
    };
}

export async function receiveMoviesByGenre(genre){

    let genreString = genre;
    let transform = genreString.split(', ');

    let match = '';


    const genreId = [{ id :28, name:"Action"},{ id :12, name : "Adventure"},{ id :16, name :"Animation"},{ id :35, name :"Comedy"},{id :80, name:"Crime"},{ id :99, name :"Documentary"},{id:18, name:"Drama"},{id:10751, name:"Family"},{id: 14, name :"Fantasy"},{ id:36, name:"History"},{ id :27, name:"Horror"},{ id :10402, name :"Music"},{ id:9648, name:"Mystery"},{ id:10749, name:"Romance"},{id:878, name:"Science Fiction"},{ id:10770, name:"TV Movie"},{ id:53, name:"Thriller"},{ id:10752, name:"War"},{id:37, name:"Western"}];

    for (let i = 0; i < transform.length; i++){
        for (let j = 0; j < genreId.length; j++){
            if (genreId[j].name == transform[i]){
            
                match += genreId[j].id + ", ";
            }
        } 
    }
    let list = encodeURIComponent(match);

    const { data } = await axios.get('/movie-by-genre?genre=' + list);
    return {
        type: 'RECEIVE_MOVIES_GENRE',
        genreList: data.movies.results
    };
 
}

export async function setParam(key, value) {
    return {
        
        type: 'SET_' + key.toUpperCase(),
        value
    };
}

export async function showDetailsForMovie(id) {
    if(!id) {
        return {
            type: 'SET_OVERVIEW_MOVIE',
            movie: false
        };
    }
    const { data } = await axios.get('/movie-detail?id=' + id);
    return {
        type: 'SET_OVERVIEW_MOVIE',
        movie: data.movies
    };
}



