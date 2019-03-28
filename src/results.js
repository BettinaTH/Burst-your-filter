import React from 'react';
import { connect } from 'react-redux';
import { receiveMoviesByYear, showDetailsForMovie } from './actions';



class Results extends React.Component {
    constructor() {
        super();
    
    }
    showOverview(movieID){
        this.props.dispatch(showDetailsForMovie(movieID))
    }


    componentWillReceiveProps(nextProps) {
        if(nextProps.state.year != this.props.state.year && nextProps.state.year.length == 4) {
            this.props.dispatch(receiveMoviesByYear(nextProps.state.year));
        }
    }


    render() {
        
        const posterURL = 'https://image.tmdb.org/t/p/w500'
        const movies = this.props.state.yearList
        
        const movieList = movies && movies.map((movie) =>
        <div key={movie.id} onClick={() => this.showOverview(movie.id)} className='details swing-in-top-fwd '>
                <img className='pic' src= {posterURL + movie.poster_path}></img>
                <div>{movie.original_title}</div>
            </div>
            
        )
        
        return (
            <div>
                <h2>Here is a list of movies</h2>
                <h4>which you don't watch normaly</h4>
                {movieList}
            </div>
        );
    };

}
const mapStateToProps = state =>{
    console.log('state in results.js:', state);
    return{
        state
    }
}
export default connect(mapStateToProps)(Results)