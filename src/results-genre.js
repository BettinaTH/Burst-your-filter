import React from 'react';
import { connect } from 'react-redux';
import { receiveMoviesByGenre, showDetailsForMovie } from './actions';
//import Teaser from './teaser';


class Genre extends React.Component {
    constructor() {
        super();
        
    }
    showOverview(movieID){
        this.props.dispatch(showDetailsForMovie(movieID))
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.state.genre != this.props.state.genre) {
            this.props.dispatch(receiveMoviesByGenre(nextProps.state.genre));
        }
    }

    render() {
        const posterURL = 'https://image.tmdb.org/t/p/w500'
        const movies = this.props.state.genreList
        console.log('const movies in Genre: ', movies)
        const movieList = movies && movies.map((movie) =>
        <div key={movie.id} onClick={() => this.showOverview(movie.id)} className='details swing-in-top-fwd'>
                <img className='pic' src= {posterURL + movie.poster_path}></img>
                <h3 className='results-title'>{movie.original_title}</h3>
        </div>
            
        )
        
        return (
            <div>
                <h2>Here is the list of movies</h2>
                <h4>which are older than you.</h4>
                {movieList}
            </div>
        );
    };

}
const mapStateToProps = state =>{
    console.log('state in Genre.js:', state);
    return{
        state
    }
}
export default connect(mapStateToProps)(Genre)