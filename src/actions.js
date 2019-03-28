import axios from './axios'

export async function receiveMoviesByYear(year){

    const key = '77da04c403c5708cfdf55c397aabb35c'
    let queryString = "?api_key=" + key + "&sort_by=revenue.desc&include_adult=true&language=en-US&primary_release_date.lte=" + year

    const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie' + queryString);
    return {
        type: 'RECEIVE_MOVIES_YEAR',
        yearList: data.results
    };
}

export async function receiveMoviesByGenre(genre){

    let genreString = genre;
  
    let transform = genreString.split(', ');

    let match = '';

    const genreId = [{ id :28, name:"Action"},{ id :12, name : "Adventure"},{ id :16, name :"Animation"},{ id :35, name :"Comedy"},{id :80, name:"Crime"},{ id :99, name :"Documentary"},{id:18, name:"Drama"},{id:10751, name:"Family"},{id: 14, name :"Fantasy"},{ id:36, name:"History"},{ id :27, name:"Horror"},{ id :10402, name :"Music"},{ id:9648, name:"Mystery"},{ id:10749, name:"Romance"},{id:878, name:"Science Fiction"},{ id:10770, name:"TV Movie"},{ id:53, name:"Thriller"},{ id:10752, name:"War"},{id:37, name:"Western"}]

    for (let i = 0; i < transform.length; i++){
        for (let j = 0; j < genreId.length; j++){
        if (genreId[j].name == transform[i]){
            
            match += genreId[j].id + ", "
        }
    } 
}
    let list = encodeURIComponent(match)

    const key = '77da04c403c5708cfdf55c397aabb35c'
    let queryGenre = "?api_key=" + key + "&sort_by=vote_count.desc&include_adult=true&language=en-US&without_genres=" + list

    const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie' + queryGenre);

    return {
        type: 'RECEIVE_MOVIES_GENRE',
        genreList: data.results
    };
 
}

export async function setParam(key, value) {
    return {
        type: 'SET_' + key.toUpperCase(),
        value
    }
}

export async function showDetailsForMovie(id) {
    if(!id) {
        return {
            type: 'SET_OVERVIEW_MOVIE',
            movie: false
        }
    }

    const key = '77da04c403c5708cfdf55c397aabb35c'
    let queryString = id +"?api_key=" + key + "&language=en-US"

    const { data } = await axios.get('https://api.themoviedb.org/3/movie/' + queryString);


    return {
        type: 'SET_OVERVIEW_MOVIE',
        movie: data
    }
}



