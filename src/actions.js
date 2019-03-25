// all axios request will go here
// so ...every function here MUST return an object with a type property!
import axios from './axios'

export async function receiveMoviesByYear(){

    const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=');

    console.log('data movie year action.js: ', data)
        return{
            type: 'RECEIVE_MOVIES_YEAR',
            year: data.results
        };
 }
 export function search (year, gender, country){
    return axios.get('/get-results/',{year, gender, country}).then(() =>{
        console.log('status in action.js search: ')
        return{
            type:'SEARCH',
            year, gender, country
        }
    });
}

