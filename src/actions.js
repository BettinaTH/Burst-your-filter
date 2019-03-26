// all axios request will go here
// so ...every function here MUST return an object with a type property!
import axios from './axios'

export async function receiveMoviesByYear(year){

    const key = ''
    let queryString = "?api_key=" + key + "&sort_by=revenue.desc&include_adult=true&language=en-US&primary_release_date.lte=" + year

    const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie' + queryString);
    return {
        type: 'RECEIVE_MOVIES_YEAR',
        yearList: data.results
    };
}


export async function receiveMoviesByGender(){

    const { data } = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=77da04c403c5708cfdf55c397aabb35c&language=en-US&page=1&append_to_response=person');

    return {
        type: 'RECEIVE_MOVIES_GENDER',
        genderList: data.results
    };
}

export async function receiveMoviesByGenre(genre){

    const key = ''
    let queryGenre = "?api_key=" + key + "&sort_by=vote_count.desc&include_adult=true&language=en-US&without_genres=" + genre

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

export function popupVisisbile(){
    return {
        type: 'OVERVIEW_VISIBILE',
        visible: true
    };
} 

export function popupHide(){
    return {
        type: 'OVERVIEW_HIDE',
        hide: true
    };
}


